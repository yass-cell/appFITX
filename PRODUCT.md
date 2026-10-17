# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One person: the owner, training alone in a commercial gym. They open the app on their phone between sets, often with sweaty hands and little attention to spare, and once a week at home to review progress. Spanish is the interface language.

## Product Purpose

Fuerza is a personal training log and programme. It tells the owner what to do today (exercises, sets, reps, rest, technique) and records the best set of each exercise per day, so strength and muscle gain are visible over weeks. Success means: every session is clear at a glance in the gym, marks are logged in seconds, and the charts show whether strength and reps are going up.

Training goals (confirmed): more upper-body muscle mass, much stronger core, very mobile hips, agile and defined legs, strong strength progression and a strong pump.

## Positioning

A single-owner, offline programme built around this person's preferred exercises and split, not a generic tracker. The routine, technique notes and progression rules live in the app itself.

## Operating Context

- Used on a phone in the gym (portrait, one hand, between sets) and occasionally on a desktop.
- Installed as a PWA from GitHub Pages; must work fully offline.
- Weekly structure (confirmed): 5 weight sessions + 2 days of hip mobility and light core. Chest and back trained 2×/week; shoulders, arms and core 3×/week; legs 1×/week.
- Favourite exercises to keep (confirmed): lat pulldown, barbell row, one-arm dumbbell row, bench press, incline dumbbell press, weighted calisthenics (weighted pull-ups and weighted dips). Wants to learn skills such as the L-sit.
- Progression (confirmed): alternate weeks that prioritise adding reps with weeks that prioritise adding load.

## Capabilities and Constraints

- Log model (confirmed, keep): one best set per exercise per day (kg and reps); kg may be 0 (bodyweight), positive (added load) or negative (assistance).
- Charts per exercise by kg, by reps, or both at once (confirmed).
- Session checkboxes, weekly completion, calendar, PR detection, body weight/waist, progress photos, JSON export/import, 30-day specialisation block, rest timer.
- Data lives only in the browser of each device (localStorage `gym-app-v1`, `gym-done-v1`; IndexedDB `gym-media-v1`). GitHub stores code, never personal records.
- Deleting records only by explicit user action inside the app (two taps); never automatic on update.
- Plain HTML/CSS/JS, no framework, no backend, no CDN; local fonts; relative paths for `/appFITX/` on Pages; versioned service-worker cache.
- Historical routine definitions must stay so past sessions remain valid in the calendar.

## Brand Commitments

- Name: Fuerza. Dark interface is a binding preference of the owner.
- Exercise schematics must be clear and easy to understand at a glance.
- Colour per sub-category (muscle group) is an established preference; pending cards dim, completed cards lit.

## Evidence on Hand

Real data exists only on the owner's phone. No sample records in the repo; tests and previews must use clearly fictitious data.

## Product Principles

1. Gym-first: anything needed mid-session is readable and tappable in one glance and one thumb.
2. Progress you can see: every logged set feeds a chart and a next target.
3. The programme explains itself: each exercise carries its why, technique and rest.
4. Never lose data by accident.

## Accessibility & Inclusion

Large tap targets and high contrast for use mid-workout; respect reduced motion.
