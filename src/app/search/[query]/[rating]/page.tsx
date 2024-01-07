import { ProdGifsRepository } from '@/gifs/services';
import { PageAsync } from '@/shared/utils';
import { RatingPage } from '@/src/PagesComponents/RatingPage';

const gifsRepository = ProdGifsRepository();

export default PageAsync(async p => await RatingPage({ ...p, gifsRepository }));
