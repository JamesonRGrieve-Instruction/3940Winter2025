import React from "react";

export default function ExamplePage({ searchParams }: { searchParams: any }) {
  const { query }: { query: any } = React.use(searchParams);

  return <h1>{query.toUpperCase()}</h1>;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: any;
}) {
  return {
    title: (await searchParams).query,
  };
}
