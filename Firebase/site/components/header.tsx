import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <title>Sunbuggy Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-gray-800 my-4 mb-8 border-b  border-gray-300 py-4">
        Sunbuggy Friends
      </h1>
    </div>
  );
};

export default Header;
