'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
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
	];

	const getIndicatorStyle = () => {
		const nav = fullNavRef.current;
		if (!nav || hoveredItem === null) return { left: 0, width: 0, top: 0, height: 0 };

		const navRect = nav.getBoundingClientRect();
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

	return (
		<header
			className={cn(
				'fixed top-4 md:top-5 z-50 inset-x-0 mx-auto w-full max-w-3xl bg-background rounded-lg shadow',
			)}
		>
			<nav
				ref={fullNavRef}
				className="relative"
				onMouseLeave={() => setHoveredItem(null)}
			>
				<div className="flex items-center justify-between p-1.5">
					<div
						className="relative z-10 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1"
						data-nav="0"
						onMouseEnter={() => setHoveredItem(0)}
					>
						<Image src="/logo-tran.webp" alt="Logo" width={1254} height={1254} className="h-7 w-auto" priority />
					</div>
					<div className="hidden relative z-10 items-center gap-1 md:flex">
						{links.map((link, i) => (
							<div
								key={link.label}
								className="relative"
								data-nav={i + 1}
								onMouseEnter={() => setHoveredItem(i + 1)}
							>
								<button
									type="button"
									className="inline-flex items-center rounded-md text-sm px-3 py-1.5 h-9 text-foreground cursor-pointer"
									onClick={() => {
										const el = document.getElementById(link.href.slice(1));
										if (el) {
											const top = el.getBoundingClientRect().top + window.scrollY - 64;
											window.scrollTo({ top, behavior: 'auto' });
										}
									}}
								>
									{link.label}
								</button>
							</div>
						))}
					</div>
					<div className="flex items-center gap-2">
						<div
							className="relative z-10"
							data-nav="4"
							onMouseEnter={() => setHoveredItem(4)}
						>
							<RippleButton variant="ghost" className="!rounded-md text-sm px-3 py-1.5 h-9">
								Login
							</RippleButton>
						</div>
						<RippleButton
							variant="ghost"
							className="!rounded-md !p-2 h-10 w-10 flex items-center justify-center md:hidden relative z-10"
							rippleColor="rgba(0,0,0,0.1)"
							onClick={() => setOpen(!open)}
						>
							{open ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
						</RippleButton>
					</div>
				</div>

				<AnimatePresence>
					{hoveredItem !== null && ready && (
						<m.div
							key="nav-pill"
							className={cn(
								'absolute rounded-md pointer-events-none',
								isBlue ? 'bg-blue' : 'bg-primary',
							)}
							initial={{ scaleY: 0, opacity: 0 }}
							animate={{
								left: indicator.left,
								width: indicator.width,
								top: indicator.top,
								height: indicator.height,
								scaleY: 1,
								opacity: 1,
							}}
							exit={{ scaleY: 0, opacity: 0 }}
							style={{ transformOrigin: 'bottom' }}
							transition={{ type: 'spring', stiffness: 500, damping: 40 }}
						/>
					)}
				</AnimatePresence>

				<div className="md:hidden">
					<AnimatePresence>
						{open && (
							<m.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.2, ease: 'easeOut' }}
								className="overflow-hidden rounded-b-lg"
							>
								<div className="px-3 pb-3 space-y-1">
									{links.map((link) => (
									<button
										key={link.label}
										type="button"
										className="block w-full rounded-md text-sm px-3 py-2 text-left text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
										onClick={() => {
											setOpen(false);
											const el = document.getElementById(link.href.slice(1));
											if (el) {
												const top = el.getBoundingClientRect().top + window.scrollY - 64;
												window.scrollTo({ top, behavior: 'auto' });
											}
										}}
									>
										{link.label}
									</button>
									))}
									<div className="border-t border-border pt-3 mt-3 space-y-2">
										<RippleButton variant="ghost" className="w-full !rounded-md text-sm">
											Sign In
										</RippleButton>
										<RippleButton
											className="w-full !bg-primary !text-primary-foreground !rounded-md text-sm"
											rippleColor="rgba(255,255,255,0.5)"
										>
											Get Started
										</RippleButton>
									</div>
								</div>
							</m.div>
						)}
					</AnimatePresence>
				</div>
			</nav>
		</header>
	);
}
