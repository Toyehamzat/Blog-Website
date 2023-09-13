import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8 rounded-full"
        src="/images/wallpaperflare.com_wallpaper (2).jpg"
        alt="profile"
        width={300}
        height={300}
        priority={true}
      />
    </section>
  );
}
