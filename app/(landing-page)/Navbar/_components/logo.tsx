import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="rocket.svg"
        alt="logo"
        width={50}
        height={50}
        className="mr-6"
      />
    </Link>
  );
};

export default Logo;
