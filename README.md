# express-http-method-override

A middleware for overriding the HTTP method of an incoming POST request.

## Installing

Install `express-http-method-override` using `npm`:

```bash
npm install --save express-http-method-override
```

Or `yarn`:

```bash
yarn add express-http-method-override
```

## Using

```typescript
import { HttpMethodOverrideMiddleware } from 'express-http-method-override';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(HttpMethodOverrideMiddleware);

  await app.listen(3000);
}

bootstrap().then();
```

## License

[MIT](LICENSE)
