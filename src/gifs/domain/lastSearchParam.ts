export class LastSearchParam {
	static key = 'lastSearch';
	value: string | null = null;

	constructor(value?: string | null) {
		if (value && typeof value === 'string') {
			this.value = value;
		}
	}

	static create(v?: string | null): LastSearchParam {
		return new LastSearchParam(v);
	}

	setLastSearch(search: string) {
		this.value = search;
		return search;
	}
}
