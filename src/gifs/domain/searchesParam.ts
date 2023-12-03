export class SearchesParam {
	static key = 'q' as const;
	value = new Set<string>();

	constructor(value?: string | null | Set<string>) {
		if (value && typeof value === 'string') {
			this.value = this.valueStringToSet(value);
		} else if (value && value instanceof Set) {
			this.value = value;
		}
	}

	static create(v?: string | null): SearchesParam {
		return new SearchesParam(v);
	}

	newSearch(newSearch: string) {
		if (!newSearch) {
			return this;
		}
		const newSearches = new Set([newSearch.trim(), ...Array.from(this.value)]);
		return new SearchesParam(newSearches);
	}

	private valueStringToSet(q: string) {
		try {
			const qParsed = JSON.parse(q ?? '[]') as string[];
			return new Set(qParsed);
		} catch (error) {
			return new Set<string>();
		}
	}

	removeSearch(search: string) {
		const newSearches = new Set(Array.from(this.value));
		newSearches.delete(search);
		return new SearchesParam(newSearches);
	}

	toArray() {
		return Array.from(this.value);
	}

	toString() {
		return JSON.stringify(Array.from(this.value));
	}
}
