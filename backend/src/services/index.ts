import { Application } from "../declarations";
// Don't remove this comment. It's needed to format import lines nicely.

import products from './products/products.service';

export default function (app: Application) {
  app.configure(products);
}
