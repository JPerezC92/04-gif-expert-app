import { ProdGifsRepository } from '@/gifs/services';
import { PageAsync } from '@/shared/utils';
import { HomePage } from '@/src/PagesComponents/HomePage';

const gifsRepository = ProdGifsRepository();

export default PageAsync(async p => await HomePage({ ...p, gifsRepository }));
