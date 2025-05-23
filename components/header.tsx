import React from "react";

export default function Header() {
	return (
		<header className="flex flex-col gap-8">
			<div className="bg-black text-white">
				<div className="flex items-center justify-center px-2 py-4">
					<ul className="flex gap-5">
						<li className="text-sm font-medium">
							🛍️ Encontre o perfume ideal para você.
						</li>
						<li className="hidden lg:block text-sm font-medium">
							💰 Perfumes a partir de 4.000,00 Kz.
						</li>
						<li className="hidden lg:block text-sm font-medium">
							🏠 Compre online e receba em casa.
						</li>
						<li className="hidden lg:block text-sm font-medium">
							📦 Entregas rápidas e gratuitas.
						</li>
					</ul>
				</div>
			</div>

			<div className="container mx-auto px-2 lg:px-0">
				<div className="mb-8">
					<h1 className="text-2xl font-light mb-3">
						<span className="font-extrabold text-4xl">Perfumaria Tchiwa</span> -
						uma celebração da beleza autêntica
					</h1>
					<p className="text-lg">
						Em cada frasco de Tchiwa, você encontra mais que um perfume —
						encontra uma história.
					</p>
				</div>
			</div>
		</header>
	);
}
