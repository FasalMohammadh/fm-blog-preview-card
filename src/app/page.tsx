import Image from "next/image";
import Link from "next/link";

import ArticleIllustration from "@/assets/images/article-illustration.svg";
import AvatarImage from "@/assets/images/avatar-image.webp";

function BlogPreviewCardPage() {
  return (
    <main className="bg-yellow min-h-screen w-full px-6 grid place-items-center">
      <div className="max-w-96 bg-white p-6 rounded-[20px] space-y-5 border [border-style:inset] border-gray-950 shadow-[8px_8px_0_0_black]">
        <Image
          src={ArticleIllustration}
          alt="Article illustration"
          className="rounded-[10px] h-[200px] object-cover"
          width={336}
          height={200}
        />
        <div className="space-y-3">
          <span className="font-extrabold text-gray-950 text-sm leading-normal bg-yellow py-1 px-3 rounded md:text-sm">
            Learning
          </span>
          <p className="text-xs leading-normal font-medium md:text-sm">
            Published 21 Dec 2023
          </p>
          <Link
            href="#"
            className="text-gray-950 font-extrabold leading-normal text-xl hover:text-yellow"
          >
            HTML & CSS foundations
          </Link>
          <p className="text-gray-500 font-medium leading-normal text-sm md:text-base">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full"
            src={AvatarImage}
            alt="Avatar image"
            width={32}
            height={32}
          />
          <p className="text-gray-950 font-extrabold text-sm leading-normal">
            Greg Hooper
          </p>
        </div>
      </div>
    </main>
  );
}

export default BlogPreviewCardPage;
