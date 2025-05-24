// Todo: add a link of instagram in the footer
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { data } from "./data";

export default async function Home() {
	if (!data) {
		return <p className="text-lg">Carregando...</p>;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{data.map((item) => (
				<div
					key={item.id}
					className="flex flex-col border border-gray-200 rounded-md"
				>
					<div className="relative mb-2 lg:hover:scale-105 hover:scale-95 transition-transform duration-300 cursor-pointer">
						<Image
							src={item.image}
							alt={item.name}
							width={300}
							height={400}
							className="w-full h-[530px] lg:h-[400px] object-cover rounded-md"
						/>

						{!item.inStock && (
							<div
								className="absolute inset-0 bg-black/70 flex items-center justify-center"
								aria-hidden="false"
								role="status"
							>
								<div
									className="w-full h-[30%] flex items-center justify-center"
									aria-label="Unavailable"
								>
									<span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
										Indisponível
									</span>
								</div>
							</div>
						)}
					</div>
					<div className="p-3">
						<div className="font-bold">{item.name}</div>
						<div className="flex items-center mb-2">
							<span className="text-sm">{item.subtitle}</span>
						</div>
						<Button
							asChild={true}
							className="w-full bg-white text-black border border-black hover:bg-black hover:text-white rounded-md"
						>
							<Link
								href={`https://wa.me/244959873012?text=Olá,+gostaria+de+adquirir+o+perfume+${item.name}`}
							>
								COMPRAR AGORA - {item.price} Kz
							</Link>
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}
