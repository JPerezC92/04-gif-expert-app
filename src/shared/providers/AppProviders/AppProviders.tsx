import { ServerQueryProvider } from '@/shared/providers';
import { ThemeRegistry } from '@/ui/ThemeRegistry/ThemeRegistry';

interface AppProvidersProps {
	children: React.ReactNode;
}

export function AppProviders({
	children,
}: AppProvidersProps): React.ReactElement {
	return (
		<ServerQueryProvider>
			<ThemeRegistry>{children}</ThemeRegistry>
		</ServerQueryProvider>
	);
}
