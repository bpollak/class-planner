# UC San Diego Class Planner Student Guide

A static, single-page guide to the public UC San Diego Class Planner. It includes
release notes for the app. It uses the Decorator 5 shell and has no backend,
package manager, or build step.

## Run locally

Open `index.html` directly, or serve the directory:

```sh
python3 -m http.server 8080
```

Then visit `http://127.0.0.1:8080/`.

## Files

- `index.html` — guide content and UC San Diego page shell
- `assets/css/site.css` — guide layout and responsive presentation (rem sizes
  are authored against the browser-default 16px root; Decorator does not
  change the root font-size)
- `assets/js/site.js` — closes the expanded mobile navigation after an in-page
  selection and enables Bootstrap scrollspy for the section navigation
- `assets/img/` — sanitized workflow screenshots and video poster frames
- `assets/video/` — older silent workflow recordings retained for reference;
  the page uses current still images because the controls have changed
- `source-media/` — original screen-recording GIFs (25–45 MB each). Archival
  source only; do **not** deploy this directory.

All Decorator CSS and JavaScript references use explicit HTTPS CDN URLs so the
page also works when opened from the local filesystem.

## Screenshot record

Screenshots were captured from the public Class Planner on July 25, 2026. They
show the FA26 term with the example courses CSE-011 and DSC-030. The schedule
details image is an older public example. The images contain no authenticated
or student-specific information.

| File | Dimensions | Workflow state |
| --- | ---: | --- |
| `planner-search.png` | 640 × 640 | Retained alternate course-selection crop |
| `planner-course-selection.png` | 897 × 710 | Added courses with section, seat, and waitlist counts |
| `planner-preferences.png` | 897 × 710 | Preferences, a preferred time, and a weekly commitment |
| `planner-calendar.png` | 897 × 710 | Previous and Next controls, weekly calendar, and exams |
| `planner-hero-build-schedule.png` | 520 × 520 | Build your schedule screen used in the hero |
| `planner-swap.png` | 897 × 710 | Current and alternate section groups |
| `planner-details.png` | 966 × 660 | Meeting, seat, waitlist, section ID, exam, and freshness details |
| `planner-tss-booking.png` | 1142 × 710 | TSS booking checklist and course links |
| `planner-share-export.png` | 1142 × 710 | Saved schedule with calendar and TSS controls |

The visible terms, courses, seats, waitlists, and timestamps are examples rather
than permanent facts. All PNGs are palette-quantized (256 colors) for size.

## Older video record

Videos were converted July 23, 2026 from the screen-recording GIFs attached to
the Class Planner feature documentation (originals in `source-media/`). They are
retained for reference but are no longer embedded because they predate the
current Preferences, Finish & book, and TSS controls.

| File | Duration | Workflow |
| --- | ---: | --- |
| `planner-build.mp4` | 9.7 s | Term selection, course search, and adding courses |
| `planner-preferences.mp4` | 9.6 s | Enrollment, goals, time limits, windows, and commitments |
| `planner-share.mp4` | 16.5 s | Saved schedule, review status, and calendar export |

Conversion command:

```sh
ffmpeg -i source-media/<name>.gif -movflags +faststart -pix_fmt yuv420p \
  -an -crf 23 assets/video/<name>.mp4
```

A fourth source recording ("Planner Mode", `export-1784762455188.gif`) was not
available at conversion time; the Fine-tune section uses still screenshots. If
it is added to `source-media/`, convert it the same way and embed it in the
`#swap` section.

## Sources reviewed

Reviewed July 25, 2026:

- [Class Planner](https://classplanner.apps.ucsd.edu/)
- UC San Diego Class Planner feature documentation supplied for this project
- [Decorator 5](https://developer.ucsd.edu/design/decorator/index.html)
- [UC San Diego Digital Accessibility Standards](https://accessibility.ucsd.edu/policies-standards/ucsd-accessibility-guidelines.html)

The student page intentionally excludes internal architecture, implementation
details, source recordings, and private documentation links.

## Maintenance

Before initial publication and at least once per academic term:

1. Compare all visible labels and workflows with the live Class Planner.
2. Re-capture screenshots if labels, controls, or layouts changed.
3. Confirm the term-neutral Class Planner link still resolves.
4. Check that Decorator CDN assets and campus footer links resolve.
5. Test keyboard navigation, visible focus, 200% zoom, and reflow at 320 px and
   390 px.
6. Run an automated accessibility scan and review the page manually with
   VoiceOver.
7. Confirm the page contains no personal or authenticated information.

## Verification record

Completed July 23–25, 2026 (re-verified after the current workflow images, TSS
booking guidance, ratings-section removal, and plain-language review):

- `html-validate` 10: no markup errors or warnings
- axe-core 4.10.3, WCAG 2.0/2.1 A and AA rules: zero violations at desktop
  and 390 px mobile viewport sizes
- Responsive browser checks: no document-level horizontal overflow at desktop,
  390 px, or 320 px
- Typography: body copy 17 px; all sub-headings render larger than body text
- Media: the guide uses current still images and has no autoplaying media
- Mobile navigation: expands accessibly, follows in-page links, and closes after
  selection; scrollspy moves the active state and `aria-current` while scrolling
- Keyboard focus: the skip link receives a visible 3 px gold outline; navigation
  uses native links and a native button
- Console: no errors or warnings after a clean page load
- Deployable tree: no file larger than 1.4 MB (`planner-share.mp4`); source
  GIFs live only in the non-deployed `source-media/` directory
- External Class Planner, campus, Accessibility, Privacy, and Terms of Use links:
  HTTP 200 (both UCSD logo references now use the `cms/decorator-5` CDN path)

Automated testing supports, but does not certify, WCAG conformance. A human
VoiceOver review should remain part of the publication checklist.

## Content guardrails

- Class Planner is a planning preview, not enrollment or a reservation.
- Class Planner can open the matching course page in TSS. Students must still
  sign in, check their planned sections, and complete booking.
- `Opened in TSS` tracks an opened link, not a completed enrollment.
- Course availability and schedule suitability are not guaranteed.
- Do not present seats, waitlists, available terms, or freshness timestamps as
  permanent facts.
- The canonical URL and absolute Open Graph URLs point at the GitHub Pages
  deployment (`https://bpollak.github.io/class-planner/`); update them if the
  site moves to a campus domain.
