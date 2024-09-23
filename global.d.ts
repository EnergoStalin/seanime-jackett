declare function fetch(url: string, options?: Options): Promise<Response>

declare interface Options {
	body?: string | URLSearchParams
	method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH" | "OPTIONS"
	headers?: Record<string, any>
}

declare interface Response {
	status: number
	statusText: string
	ok: boolean
	json(): any
	text(): string
}
