# Class Planner website update plan

Status: implemented July 25, 2026
Reviewed: July 25, 2026
Live planner: <https://classplanner.apps.ucsd.edu/>
Current guide: <https://bpollak.github.io/class-planner/>

## Recommendation

Update the guide around the real student journey:

1. Add courses.
2. Set preferences and personal commitments.
3. Build and compare proposed schedules.
4. Review warnings and adjust sections.
5. Finish the plan, save a return link, and continue to TSS.
6. Reopen, edit, share, or add the schedule to a calendar.

The most important change is the final step. The planner now offers **Finish & book** when course-specific TSS links are available. Finishing a plan creates a saved schedule and opens a **Book your courses in TSS** checklist. Each course has an **Open in TSS** link.

The guide currently says students must manually enter every course and section in TSS. That is now incomplete. The new links take students to the matching course page in TSS, but they do not complete enrollment. Students still need to sign in, confirm the planned sections, choose **Go to Booking**, and choose **Book**.

## What I tested

I used the live planner in Chrome with a new Fall 2026 plan.

### Start and course search

- Cleared the previous course list and started with no courses.
- Confirmed the term selector.
- Searched with partial course codes such as `CSE 11` and `DSC 30`.
- Confirmed that search results show the course name, number of sections, open seats, and waitlist spots.
- Added and removed courses.
- Confirmed that **Build schedule** is disabled until at least one course is added.

### Preferences and personal commitments

The **Add preferences** and **Preferences** panels include:

- **Open or waitlist** and **Open only**
- **Fewer days**
- **Later starts**
- **Shorter gaps**
- **Start no earlier**
- **Finish by**
- Preferred time windows by day and time
- Times the student cannot attend
- Weekly commitments
- Specific-date commitments
- **Start Over**
- Light and dark modes

The current guide already explains preferred times and personal commitments accurately. That content should stay prominent.

### Schedule options

With CSE-011 and DSC-030, the planner created four proposed schedules.

- The page showed **Schedule 1 of 4**.
- **Previous schedule** and **Next schedule** moved between alternatives.
- The calendar showed lectures and discussions.
- Exams appeared in a separate table.
- The URL changed to preserve the selected alternative.
- A **Review** button showed warnings for that alternative.

One product issue appeared during this test: after moving to Schedule 2 of 4, the page still said **Best match based on your priorities.** That label should either remain only on the best option or clearly explain why another option is also marked as the best match.

### Review status

I saw two kinds of review states:

- A best-effort schedule with conflicts, a TBA meeting, and missing availability data.
- A schedule with no time conflict but with availability warnings.

The guide should keep the short sentence the user previously approved:

> No conflicts means no review items were reported.

Do not restore the longer removed sentence that lists every possible review reason. The FAQ can continue to tell students to open the review items and check the affected course information.

### Course details and section changes

Selecting a course on the calendar opened:

- Current lecture and discussion sections
- Meeting places
- Instructor
- Open and total seats
- Waitlist
- Section IDs
- Seat-data freshness
- **Lock Course**
- **Swap Section**

The **Swap Section** panel showed:

- The current section group
- Other complete section groups
- Whether each group fits the current schedule
- **Preview**
- **Use this section**

The live planner still contains historical course-evaluation data. The website should continue to omit that feature because the user explicitly removed the ratings section from the guide.

### Finish, save, share, and calendar

The final action depends on the courses:

- Eligible plans show **Finish & book**.
- Other plans can still show **Save & share**.

Finishing a plan:

- Created a saved schedule with a return/share link.
- Opened the TSS booking checklist.
- Preserved **Edit**, **Details**, review status, and the weekly calendar on the saved page.
- Offered **Add to Calendar** with:
  - Download `.ics`
  - Google Calendar
  - Apple Calendar
  - Outlook
- Added a **Book in TSS** button to reopen the booking checklist.

The saved schedule does not update a calendar after export and does not enroll the student.

### TSS course links

The booking checklist:

- Told the student to sign in to TSS first.
- Listed each course, instructor, planned sections, and class numbers.
- Provided one **Open in TSS** link per course.
- Opened TSS in a new tab at the course-specific schedule page.
- Redirected to the Triton Student System login when the user was not signed in.
- Changed the link state to **Opened in TSS** after use.
- Tracked progress such as `1 of 5 courses opened`.
- Offered **Copy your return link** so the student could continue later.

The observed links opened the matching TSS course page. The planner told the student to select the planned sections and then choose **Go to Booking** and **Book**. The guide must not imply that opening a link reserves a seat, confirms the sections, or finishes enrollment.

## Gaps in the current website

| Current website | Live planner | Required update |
| --- | --- | --- |
| Final section is **Save, share, and add to your calendar** | Eligible plans use **Finish & book** and then show TSS links | Rename and expand the final section |
| Guide says students must enter final choices in TSS | Class Planner now opens the matching TSS course page | Explain the new handoff and the remaining booking steps |
| Only **Save & share** is documented | The button can be **Finish & book** or **Save & share** | Explain why the label may differ |
| No TSS checklist image or video | Saved plans have a course-by-course booking checklist | Add a current screenshot and update the final video |
| FAQ says planning is separate from TSS | The systems are now connected by course links | Keep the “does not enroll” warning, but describe the links |
| README says all selections must be entered manually | Course pages can now be opened directly | Revise the verified behavior and limitations |
| Existing share/export media predates the booking flow | Saved page now includes **Book in TSS** | Replace the old media |

## Proposed website changes

### 1. Update the overview

Add one plain sentence near the main call to action:

> When your schedule is ready, Class Planner can open each course in TSS so you can finish booking.

Keep the existing warnings about TBA times, changing seats, and the fact that Class Planner does not reserve a seat.

### 2. Keep the build and preferences sections

The current first two sections are accurate. Make only small copy changes:

- Use the live label **Add preferences** when describing the first visit.
- Use **Preferences** for changes made after schedules are built.
- Keep the personal commitments callout.
- Add a short example that distinguishes a preferred time from a commitment:
  - Preferred time: “I would rather take classes in the morning.”
  - Commitment: “I work every Tuesday from 2 to 5.”

### 3. Tighten the compare and review section

Keep:

- The approved “previous and next” wording.
- The exams reminder.
- The short **No conflicts** sentence.

Add:

- A note that review items belong to the schedule currently on screen.
- A screenshot that shows the **Review** count without trying to list every possible warning in the body copy.

Do not add back the removed explanation that defines review by listing TBA times, missing components, availability data, or conflicts.

### 4. Refresh the adjust-sections section

The current explanation of **Lock Course**, **Swap Section**, **Preview**, and **Use this section** matches the live app.

Refresh its screenshot with the current wording:

- **Current**
- **Fits current schedule**
- **Preview**
- **Use this section**

Keep the warning that previewing or choosing a section does not reserve a seat.

### 5. Replace “Save and share” with “Finish and book”

Recommended navigation label:

> Finish and book

Recommended section heading:

> Finish your plan and continue to TSS

Explain this sequence:

1. Choose **Finish & book**. If TSS links are not available, the button may say **Save & share**.
2. Class Planner saves the schedule and creates a return link.
3. Sign in to TSS.
4. Choose **Open in TSS** for each course.
5. Confirm the course and planned sections.
6. Choose **Go to Booking**, then **Book**.
7. Return to Class Planner for the next course.

Add a short callout:

> Opening a course in TSS is not enrollment. Check the term, course, sections, and seat information before you book.

Explain the checklist honestly:

- **Opened in TSS** means the link was opened.
- It does not prove that the course was booked.
- The progress count tracks opened links, not enrollment results.

### 6. Keep saved-schedule and calendar help in the final section

After the TSS steps, explain:

- **Copy your return link**
- **Edit**
- **Details**
- **Book in TSS**
- **Add to Calendar**

Retain the calendar warning:

> Calendar export copies the schedule once. It does not update when course information changes.

### 7. Revise the FAQ

Update these questions:

#### Does Class Planner enroll me in classes?

No. Class Planner can open each course in TSS, but you still need to sign in, confirm your sections, and complete booking.

#### What does “Open in TSS” do?

It opens the matching course page in TSS. Check the planned sections before you book.

#### Why do I see “Save & share” instead of “Finish & book”?

Some courses may not have a TSS booking link. You can still save and share the schedule, then use the section details to finish in TSS.

#### Can I return later?

Yes. Copy the return link after finishing the plan. Anyone with the link can view the saved schedule, so treat it as a shareable link.

Keep the existing questions about seats, waitlists, TBA meetings, editing, sharing, calendars, and the course limit. Update the FAQ JSON-LD to match the visible answers exactly.

## New and updated media

Capture a fresh, public-data-only example from one clean plan.

### Replace

- `assets/video/planner-share.mp4`
- `assets/img/planner-share-poster.png`
- `assets/img/planner-share-export.png`

### Add

- `assets/img/planner-finish-book.png`
  - Shows the **Finish & book** action on a schedule with no conflicts.
- `assets/img/planner-tss-booking.png`
  - Shows the in-app **Book your courses in TSS** checklist.
- Optional `assets/video/planner-finish-book.mp4`
  - Shows finish, return link, opening one TSS course, returning, and calendar options.

Do not show a signed-in TSS page, student identifiers, browser account details, or private enrollment data. The in-app checklist is enough to explain the handoff.

Use plain alt text that names the task, not decorative details. Keep videos muted, captioned in nearby text, keyboard usable, and understandable without motion.

## Product improvements found during the walkthrough

These are app suggestions, not required website edits.

### High priority

1. **Fix the best-match label.** Schedule 2 of 4 still showed “Best match based on your priorities.” Show that label only on the actual best option, or explain ties.
2. **Make TSS progress wording consistent.** The checklist combines “courses opened,” links marked **Opened in TSS**, and checkboxes described as “Mark as booked.” Use one status model and state clearly that Class Planner cannot verify enrollment.
3. **Explain the finish action before the click.** Add a short line near **Finish & book** saying it saves a return link and opens TSS course links.

### Medium priority

4. **Make the two final button labels less surprising.** Explain in the interface why one plan shows **Finish & book** and another shows **Save & share**.
5. **Move Start Over.** It is currently inside Preferences. Put it near **Edit Courses** or in a clearly labeled plan menu, with confirmation.
6. **Preserve TSS context through login.** Verify that a student who signs in from a deep link returns to the same course page.
7. **Add a direct help link from the booking checklist.** Link to the new guide section without interrupting the booking flow.

### Monitor

8. **Track the first-load error.** One Chrome profile repeatedly showed “We hit an unexpected snag” at `/start`, while another profile completed the full flow. Record the client error and route state so support can tell whether it is stale local data, a session problem, or a service failure.

## Files to change during implementation

- `index.html`
  - Navigation labels
  - Overview
  - Final workflow section
  - Enrollment reminder
  - FAQ
  - FAQ JSON-LD
  - Image and video references
- `README.md`
  - Current verified behavior
  - TSS handoff and limitations
  - Asset inventory
  - Review date
- `assets/img/*`
  - Replace the outdated final-step images
  - Add the TSS checklist image
- `assets/video/*`
  - Replace the outdated final-step video
- `assets/css/site.css`
  - Only if needed for the new checklist figure or a six-item navigation row
- `assets/js/site.js`
  - Only if the updated media needs the existing video behavior adjusted

## Implementation order

### Phase 1: Accuracy

1. Update the final step and the enrollment reminder.
2. Add the TSS workflow and limitations.
3. Revise the FAQ and structured data.
4. Update README behavior notes.
5. Search the repository for stale claims about manual TSS entry, **Save & share**, and the old final-step label.

### Phase 2: Media

1. Capture the clean schedule and TSS checklist.
2. Replace the old share/export video and poster.
3. Check all alt text, captions, and file sizes.

### Phase 3: Polish

1. Read the whole page for plain language.
2. Check that exact product labels are bold and consistent.
3. Remove repeated warnings while keeping the important enrollment and seat warnings.
4. Verify navigation and responsive layout.

### Phase 4: Publish and verify

1. Validate the HTML.
2. Check the FAQ JSON-LD against the visible FAQ.
3. Check desktop widths and 390 px and 320 px mobile widths.
4. Check keyboard navigation, focus, media controls, and reduced-motion behavior.
5. Confirm there are no faculty-ratings references in the website.
6. Publish from `main`.
7. Verify both:
   - <https://bpollak.github.io/class-planner/>
   - <https://classplanner.apps.ucsd.edu/>
8. Check the new text is present and the old TSS claim is absent with cache bypass.
9. Open every guide anchor and all external links.

## Acceptance criteria

- A student can understand the complete journey without already knowing TSS.
- The guide uses the current labels **Finish & book**, **Book in TSS**, **Open in TSS**, **Copy your return link**, and **Add to Calendar**.
- The guide explains the **Save & share** fallback.
- The guide never says that a TSS link enrolls the student or reserves a seat.
- Personal commitments remain easy to find.
- The approved short review-status wording remains intact.
- Faculty ratings are not documented.
- Screenshots and videos match the current live interface.
- Visible FAQ text and FAQ JSON-LD match.
- The page passes HTML, accessibility, responsive, and live-link checks.

## Scope for the next implementation turn

Implement the website and README changes, create fresh media from the clean sample plan, validate locally, then publish and verify the live guide. Do not change the Class Planner application itself unless that work is requested separately.
