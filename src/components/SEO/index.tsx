import Head from "next/head";

interface HeaderProps {
  title: string;
  description?: string;
}

function SEO({ title, description = "방과후 관리 서비스" }: HeaderProps) {
  const img = "/png/Logo.png";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_URL} />
      <meta property="og:image" content={img} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:url"
        content={process.env.NEXT_PUBLIC_FRONT_URL}
      />
      <meta property="twitter:image" content={img} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}

export default SEO;
