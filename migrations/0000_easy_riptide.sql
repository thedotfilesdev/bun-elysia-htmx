CREATE TABLE `todos` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `todos` (`name`);