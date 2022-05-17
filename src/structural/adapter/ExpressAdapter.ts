import Http from "./Http";
import express from "express";

export default class ExpressAdapter implements Http {
	app: any;

	constructor () {
		this.app = express();
	}

	async on(method: string, url: string, callback: any): Promise<any> {
		this.app[method](url, async function (req: any, res: any) {
			const output = await callback(req.params, req.body);
			res.json(output);
		});
	}

	async listen(port: number): Promise<void> {
		return this.app.listen(port);
	}
}
