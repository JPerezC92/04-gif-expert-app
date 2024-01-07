import { ProdGifsRepository } from '@/gifs/services';
import { PageAsync } from '@/shared/utils';
import { GifDetailPage } from '@/src/PagesComponents';

const gifsRepository = ProdGifsRepository();

export default PageAsync(
	async p => await GifDetailPage({ ...p, gifsRepository }),
);
