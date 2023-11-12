export default function SearchPage({
	searchParams,
}: {
	searchParams?: Record<string, string | string[] | undefined>;
}) {
	const { q } = searchParams as Record<string, string>;
	const search = JSON.parse(q ?? '[]') ?? [];

	return (
		<div>
			<h1>Search Page</h1>
			<ul>
				{search.map((s: string) => (
					<li key={s}>{s}</li>
				))}
			</ul>
		</div>
	);
}
