"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);

		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			type="button"
			onClick={scrollToTop}
			aria-label="Scroll to top of page"
			className={`fixed bottom-6 right-4 z-50 p-3 rounded-full bg-black/80 text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-black ${
				isVisible
					? "opacity-90 translate-y-0"
					: "opacity-0 translate-y-12 pointer-events-none"
			}`}
		>
			<div className="flex items-center gap-2">
				<ChevronUp className="h-5 w-5" aria-hidden="true" />
				<span className="text-sm font-medium hidden sm:inline">
					Back to Top
				</span>
			</div>
		</Button>
	);
}
