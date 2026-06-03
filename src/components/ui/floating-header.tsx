'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { RippleButton } from '@/components/ui/multi-type-ripple-buttons';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);
	const [hoveredItem, setHoveredItem] = useState<number | null>(null);
	const [ready, setReady] = useState(false);
	const fullNavRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		setReady(true);
	}, []);

	const links = [
		{
			label: 'Features',
			href: '#features',
		},
		{
			label: 'Pricing',
			href: '#pricing',
		},
		{
			label: 'About',
			href: '#about',
		},
	];

	const getIndicatorStyle = () => {
		const nav = fullNavRef.current;
		if (!nav) return { left: 0, width: 0, top: 0, height: 0 };

		const navRect = nav.getBoundingClientRect();

		if (hoveredItem === null) {
			return {
				left: 0,
				width: navRect.width,
				top: 0,
				height: navRect.height,
			};
		}

		const el = nav.querySelector(`[data-nav="${hoveredItem}"]`);
		if (!el) return { left: 0, width: 0, top: 0, height: 0 };
		const elRect = el.getBoundingClientRect();
		return {
			left: elRect.left - navRect.left,
			width: elRect.width,
			top: elRect.top - navRect.top,
			height: elRect.height,
		};
	};

	const indicator = getIndicatorStyle();
	const isBlue = hoveredItem === 0 || hoveredItem === 4;

	const itemTextColor = (index: number): string => {
		if (hoveredItem === null) return '#ffffff';
		return hoveredItem === index ? '#ffffff' : '#090201';
	};

	return (
		<header
			className={cn(
				'sticky top-5 z-50 mx-auto w-full max-w-3xl rounded-lg shadow bg-background',
			)}
		>
			<nav
				ref={fullNavRef}
				className="mx-auto flex items-center justify-between p-1.5 relative"
				onMouseLeave={() => setHoveredItem(null)}
			>
				{ready && (
					<m.div
						className={cn(
							'absolute rounded-lg pointer-events-none',
							isBlue ? 'bg-blue' : 'bg-primary',
						)}
						initial={false}
						animate={{
							left: indicator.left,
							width: indicator.width,
							top: indicator.top,
							height: indicator.height,
							borderRadius: hoveredItem === null ? '0.5rem' : '0.375rem',
						}}
						transition={{ type: 'spring', stiffness: 500, damping: 40 }}
					/>
				)}
				<div
					className="relative z-10 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1"
					data-nav="0"
					onMouseEnter={() => setHoveredItem(0)}
					style={{ color: itemTextColor(0) }}
				>
					<Image src="/logo-tran.webp" alt="Logo" width={1254} height={1254} className="h-7 w-auto" priority />
				</div>
				<div className="hidden relative z-10 items-center gap-1 lg:flex">
					{links.map((link, i) => (
						<div
							key={link.label}
							className="relative"
							data-nav={i + 1}
							onMouseEnter={() => setHoveredItem(i + 1)}
							style={{ color: itemTextColor(i + 1) }}
						>
							<RippleButton
								variant="ghost"
								className="!rounded-md text-sm px-3 py-1.5 h-9"
								onClick={() => {
									const el = document.getElementById(link.href.slice(1));
									el?.scrollIntoView({ behavior: 'smooth' });
								}}
							>
								{link.label}
							</RippleButton>
						</div>
					))}
				</div>
				<div className="flex items-center gap-2">
					<div
						data-nav="4"
						onMouseEnter={() => setHoveredItem(4)}
						style={{ color: itemTextColor(4) }}
					>
						<RippleButton variant="ghost" className="!rounded-md text-sm px-3 py-1.5 h-9">
							Login
						</RippleButton>
					</div>
					<Sheet open={open} onOpenChange={setOpen}>
						<RippleButton
							variant="ghost"
							className="!rounded-md !p-2 h-10 w-10 flex items-center justify-center lg:hidden"
							rippleColor="rgba(0,0,0,0.1)"
						>
							<MenuIcon className="size-4" />
						</RippleButton>
						<SheetContent
							className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
							showClose={false}
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<RippleButton
										key={link.label}
										variant="ghost"
										className="!rounded-md !justify-start text-sm px-3 py-2"
										onClick={() => {
											setOpen(false);
											const el = document.getElementById(link.href.slice(1));
											el?.scrollIntoView({ behavior: 'smooth' });
										}}
									>
										{link.label}
									</RippleButton>
								))}
							</div>
							<SheetFooter>
								<RippleButton variant="ghost" className="!rounded-md text-sm">
									Sign In
								</RippleButton>
								<RippleButton
									className="!bg-primary !text-primary-foreground !rounded-md text-sm"
									rippleColor="rgba(255,255,255,0.5)"
								>
									Get Started
								</RippleButton>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
