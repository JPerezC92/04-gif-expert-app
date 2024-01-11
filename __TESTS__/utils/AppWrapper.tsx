import { queryClientWrapper } from './QueryClientWrapper';

export function AppWrapper(): React.FC<{
	children: React.ReactNode;
}> {
	return function App({ children }) {
		const QueryClientWrapper = queryClientWrapper();

		return (
			<>
				<QueryClientWrapper>
					<>{children}</>
				</QueryClientWrapper>
			</>
		);
	};
}
