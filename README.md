# SSO hand-rolled SSO implementation

## How to run this:

```bash
docker compose up --build
```

It will spin up db at `PgSQL` at `5432` port, server at 3000 port.

## Development:

Install dependencies

```
bun i
```

Run `drizzle studio` to monitor database directly

```
bun run studio
```

## Migrations:

1. make changes to schema in `./src/db/schema/*`
2. generate migration `bun run generate`
3. Apply migration `bun run migrate`
