# EdVyro Task 3 — REST API and Persistent Data

Node.js + Express API using Node's built-in `node:sqlite` database, avoiding native addon compilation.

## Requirements
Node.js 22.13+ and npm.

## Run on Windows
```powershell
npm install
npm run seed
npm start
```
Open `http://localhost:3000/api/health`.

## Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/internships?page=1&limit=10` | List, paginate, search/filter |
| GET | `/api/internships/:id` | Get one record |
| POST | `/api/internships` | Create |
| PUT | `/api/internships/:id` | Update full record |
| PATCH | `/api/internships/:id` | Update supplied fields |
| DELETE | `/api/internships/:id` | Delete |

List filters: `domain`, `work_mode` (`Remote`, `Hybrid`, `On-site`), and `search`. Pagination defaults to page 1 and limit 10 (maximum 100).

## Example POST JSON
```json
{
  "title":"Backend Developer Intern",
  "company":"Example Studio",
  "domain":"Software Development",
  "location":"Remote, India",
  "work_mode":"Remote",
  "duration_weeks":8,
  "stipend":"₹8,000/month",
  "description":"Assist with backend APIs and testing.",
  "skills":["Node.js","Express","SQL"]
}
```

The database is created at `data/internships.db`; records persist between server restarts. Seed records are fictional demonstration data. GitHub Pages cannot run Node.js; submit the public repository or deploy to a Node.js host that supports persistent storage. Node may show an experimental `node:sqlite` warning; this alone is not a failure.
