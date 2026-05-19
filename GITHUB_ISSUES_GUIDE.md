# AI Agent Guide: GitHub Issues & Milestone Discipline

This guide is a mandatory input for all AI development agents working on the **Aria Fertility** project. Follow these instructions strictly at the start of, during, and at the end of every work session to maintain project tracking, transparency, and milestone alignment.

---

## 📋 Core Principles
1. **No Silent Work**: Every code change, refactor, or bug fix must be associated with a GitHub Issue.
2. **Milestone Integrity**: All issues must reside within an active, numbered project milestone. No "floating" issues.
3. **Traceability**: All git commits and pull requests must reference their corresponding issue numbers.

---

## 🛠️ Step-by-Step AI Execution Workflow

### Step 1: Session Initialization (First Step of Every Chat)
Before writing any code or modifying configurations, the AI agent must perform the following checks:
1. **Inspect Remotes**: Run `git remote -v` to ensure connection to the repository is active.
2. **List Active Issues & Milestones**:
   * Search for existing issues related to the current task using project files or the terminal (e.g., querying git logs or checking `.github/` folder configs if available).
3. **Establish/Verify the Issue**:
   * **If an issue already exists**: Report the issue number and link to the user (e.g., *"Proceeding with work under Issue #X"*).
   * **If no issue exists**: Prompt the user or write a draft issue description. Since the CLI may not have `gh` auth, draft the issue description in markdown, output it to the user, and ask them to create it OR if a CLI tool or GitHub integration is available, create it automatically.
4. **Link to Milestone**: Ensure the issue is assigned to the current active milestone (e.g., `Milestone 1: Supabase Backend & Patient Portal`).

### Step 2: Granular Task Breakdown
Before starting execution, update the active issue description (or draft state) with a detailed checklist of tasks using markdown task lists:
```markdown
- [ ] Implement database table configurations
- [ ] Configure Row-Level Security (RLS) policies
- [ ] Create API route/server action handlers
- [ ] Build responsive user interface components
- [ ] Write integration test cases and verify with linter
```

### Step 3: Git Commit & Audit Trail Discipline
When committing changes, use clean git messages referencing the issue number:
* **Feature additions**: `feat(#12): implement patient role promotion trigger`
* **Bug fixes**: `fix(#45): resolve tsconfig type definition resolution`
* **Refactoring**: `refactor(#18): clean up premium shadow styles in globals.css`
* **Documentation**: `docs(#3): add setup steps to readme`

*Note: Never make empty or generic commit messages like "updates" or "fix".*

### Step 4: Progress Auditing & Comments
If a session is long or split into multiple parts:
* Write a concise summary of the progress made so far.
* Update the checklists (check off completed items: `- [x]`).
* If a blocker is met (e.g., dependency mismatch, environment issue), explicitly document it as a **BLOCKER** with steps to resolve it.

### Step 5: Task Closure & Handoff
When all tasks are complete and verified (passing `npm run lint` and `npm run build` or typecheck):
1. **Commit & Push**: Push all changes to the remote branch.
2. **Link the PR/Commit to the Issue**: Use GitHub linking keywords in the final commit message or pull request description:
   * `Closes #IssueNumber` or `Fixes #IssueNumber`
3. **Verify Milestone Impact**: Review the remaining open issues under the active Milestone. Report the percentage of milestone completion to the user (e.g., *"This task brings Milestone 1 to 80% completion. Remaining open issues: #14, #15"*).

---

## 📝 Standardized Issue Templates

AI agents must utilize the following structures when drafting issues for the user:

### 🌟 Feature Issue Template
```markdown
### 🎯 Objective
[Provide a 1-2 sentence description of the feature and its value to Aria Fertility Clinic]

### 📋 Scope of Work / Checklist
- [ ] [Granular Sub-task 1]
- [ ] [Granular Sub-task 2]

### 💻 Technical Approach
* **Database Changes**: [e.g., new tables, columns, constraints, or triggers]
* **UI/UX Components**: [e.g., new page routes, toast styles, layouts]
* **Security & Auth**: [e.g., RLS policies, middleware gates]

### ✅ Success Criteria
- [ ] Passes local TypeScript typechecks (`npm run typecheck`)
- [ ] Code is lint-error free (`npm run lint`)
- [ ] Functional verification: [e.g., user is successfully redirected upon login]
```

### 🐛 Bug Issue Template
```markdown
### 🚨 Bug Description
[Provide a clear description of the bug and what is broken]

### ⚙️ Steps to Reproduce
1. Go to URL `/route`
2. Click on component `[X]`
3. Observe behavior `[Y]`

### 🛠️ Proposed Fix
* **Root Cause**: [Explain why it failed]
* **Resolution Steps**: [List files to edit and logic to correct]

### ✅ Verification
- [ ] Verified that error no longer prints in console/logs
- [ ] Clean build and compilation
```

---

*Adherence to this guide is mandatory for all AI agents. It ensures that the engineering history matches the GitHub project tracking perfectly.*
