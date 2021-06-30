import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

export default async (req, res) => {
	const id = req.query.id;
	if (typeof id === 'string' && id.length > 0) {
		const file = `/storage/pdf/${id}.pdf`;
		const fileFs = path.join(process.cwd(), 'public', file);
		if (fs.existsSync(fileFs)) {
			res.status(200).json({ file, fromCache: true });
		} else {
			try {
				const url = `http://localhost:3000/generate/pdf?id=${id}`;
				const browser = await chromium.launch();
				const page = await browser.newPage();
				await page.goto(url);
				await page.pdf({
					format: 'A4',
					path: fileFs,
					landscape: false
				});
				res.status(200).json({ file, fromCache: false });
			} catch (e) {
				console.log(e);
				res.status(500).end();
			}
		}
	} else {
		res.status(404).end();
	}
};
