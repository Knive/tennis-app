export type Player = {
	id: number,
	firstname: string,
	lastname: string,
	shortname: string,
	sex: string,
	country: Record<string, string>,
	picture: string,
	data: Record<string, any>
}