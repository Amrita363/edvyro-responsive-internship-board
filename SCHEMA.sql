CREATE TABLE IF NOT EXISTS internships (
id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,company TEXT NOT NULL,domain TEXT NOT NULL,location TEXT NOT NULL,
work_mode TEXT NOT NULL CHECK(work_mode IN ('Remote','Hybrid','On-site')),duration_weeks INTEGER NOT NULL CHECK(duration_weeks BETWEEN 1 AND 104),
stipend TEXT NOT NULL DEFAULT 'Not specified',description TEXT NOT NULL,skills TEXT NOT NULL DEFAULT '[]',
created_at TEXT NOT NULL DEFAULT(datetime('now')),updated_at TEXT NOT NULL DEFAULT(datetime('now')));
CREATE INDEX IF NOT EXISTS idx_domain ON internships(domain);
CREATE INDEX IF NOT EXISTS idx_mode ON internships(work_mode);
