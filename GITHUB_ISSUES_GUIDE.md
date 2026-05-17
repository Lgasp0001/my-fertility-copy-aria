# GitHub Issues & Milestone Management Guide

This guide provides instructions for AI development agents to maintain project discipline by consistently tracking work through GitHub Issues and Milestones.

## 1. Task Initialization
Before starting any new coding task, the AI agent MUST:
- **Search for an existing issue** related to the task.
- If no issue exists, **create a new issue** with:
    - A clear, descriptive title.
    - A detailed body outlining the objective, technical approach, and success criteria.
    - Relevant **Labels** (e.g., `feature`, `bug`, `refactor`, `ui/ux`).
    - Assignment to the current active **Milestone**.
- **Report the Issue Number** to the user at the start of the session.

## 2. Progress Tracking
During the development process:
- **Add comments** to the issue when significant sub-tasks are completed or if technical decisions are made.
- If a blocker is encountered, update the issue with a `blocked` label and a comment explaining the hurdle.
- Use **Task Lists** (`- [ ]`) within the issue description to track granular progress.

## 3. Milestone Integration
- Every issue should be linked to a Milestone.
- If a milestone is reaching 100% completion, notify the user to discuss the next milestone's objectives.
- Never leave an issue "floating" without a milestone unless explicitly instructed.

## 4. Completion & Handoff
When the task is finished:
- **Link the Pull Request** to the issue using keywords (e.g., "Closes #123").
- **Close the issue** only after the user has verified the work or the PR is merged.
- Provide a final summary in the issue comments detailing what was implemented.

## 5. Issue Templates
When creating issues, use the following structure:

### Feature Template
```markdown
## Objective
[Brief description of what we are building]

## Tasks
- [ ] Sub-task 1
- [ ] Sub-task 2

## Technical Notes
[Key implementation details, libraries used, or architecture changes]
```

### Bug Template
```markdown
## Problem
[Description of the bug and current behavior]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]

## Fix Implementation
[How the bug was resolved]
```

---
**Note to AI Agent:** Adherence to this guide is mandatory for maintaining project transparency and long-term maintainability.
