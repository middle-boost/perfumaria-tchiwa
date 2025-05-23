import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="container mx-auto px-2 py-6">
				<div className="flex flex-col items-center">
					<p className="text-sm">
						© 2023 Perfumaria Tchiwa. Todos os direitos reservados.
					</p>
				</div>

				<ul className="flex justify-center gap-4 mt-4">
					<li>
						<Link
							href="https://www.facebook.com/profile.php?id=61576688033179"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-facebook-icon lucide-facebook"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
						</Link>
					</li>
					<li>
						<Link href="#" target="_blank" rel="noopener noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-instagram-icon lucide-instagram"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
								<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
							</svg>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
