export enum AccountType {
	MANAGER = "manager",
	CONGREGATION = "congregation",
}

export interface User {
	id: string,
	email: string,
	accountType: AccountType
	name?: string,
	avatarUrl?: string,
}
