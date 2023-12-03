import { type Pagination } from './pagination.model';

export interface PaginatedResponse<T> {
	data: T[];
	pagination: Pagination;
}
