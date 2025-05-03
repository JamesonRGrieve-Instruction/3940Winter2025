import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full md:max-w-32">
        <Image
          src="/trees.jpg"
          alt="Some winter trees."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 8rem"
          // Sizes allow us to offer NextJS alternative sizes based on screen size to ensure we aren't loading massive images to be rendered in tiny spaces.
          width={1280}
          height={853}
        />
        <Image
          src="https://cdn.pixabay.com/photo/2025/04/22/05/54/dog-9548923_1280.jpg"
          alt="Some winter trees."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 8rem"
          // Sizes allow us to offer NextJS alternative sizes based on screen size to ensure we aren't loading massive images to be rendered in tiny spaces.
          width={1280}
          height={853}
        />
        <Image
          src="/trees.jpg"
          alt="Some winter trees."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 8rem"
          // Sizes allow us to offer NextJS alternative sizes based on screen size to ensure we aren't loading massive images to be rendered in tiny spaces.
          width={1280}
          height={853}
        />
        <Image
          src="/trees.jpg"
          alt="Some winter trees."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 8rem"
          // Sizes allow us to offer NextJS alternative sizes based on screen size to ensure we aren't loading massive images to be rendered in tiny spaces.
          width={1280}
          height={853}
        />
      </main>
    </div>
  );
}
