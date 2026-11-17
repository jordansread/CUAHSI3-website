# Contributing to the CUAHSI website

Any CUAHSI staff member can change this website. You do not need to be a developer. An agent (Claude)
does the file work, and a website owner reviews every change before it goes live.

## Which level are you?

| Level | You want to | You need | Status |
|---|---|---|---|
| **1. Ask** | Add an event, a news item or an impact story, or update your profile, without touching GitHub | Email (Claude can help you write the request, but you do not need it) | **Works today**, by email (below). Ready-made Claude prompts and a request form are coming. |
| **2. Do it with an agent** | Make the same changes yourself and open the pull request | The Claude desktop app, a GitHub account with access to the repository | **Not open yet.** It opens once the work moves to the organisation repository. |
| **3. Propose a larger change** | A new page or section, a change to layout or navigation, anything involving code or a web address | As for level 2 | **Ask Jordan first.** A written guide is coming. |

**Not sure which item type you need?** Read [docs/contribute/item-types.md](docs/contribute/item-types.md). It
explains, in plain words, what each kind of item is, where it shows on the site and what facts it needs.

## Level 1: ask, today

1. Read the entry for your item in [docs/contribute/item-types.md](docs/contribute/item-types.md). Gather
   the facts it lists, including the link to the thing itself (the event's page, the paper, the tool).
2. Optional: paste that entry into Claude and ask it to interview you and write up the request. Check what it
   writes. It must not fill in a date, link or name you did not give it.
3. Email the request to help@cuahsi.org with "Website request" and the item type in the subject, with any
   photo attached. Say what is still unconfirmed.

A website owner's agent turns it into a change. The website owner may come back to you with questions about
facts that could not be confirmed.

## What happens to every change

- **Checks.** Every change runs through the same automatic checks, which make sure the required facts are
  there and that links within the site work. The agent also searches for the same item already on the site.
- **Facts.** The agent never invents a fact. Anything it could not confirm is listed for a person to check.
- **Review.** A website owner reviews it and merges it. Changes that touch code, settings or web addresses
  are approved by Jordan before they are built.

## For developers and agents

The rules every change follows are in [AGENTS.md](AGENTS.md), which links to the rest: the full rules
(`docs/rules.md`), the procedures (`docs/procedures.md`), and the content rules
(`.claude/rules/content.md`). [README.md](README.md) covers setting up the code.
