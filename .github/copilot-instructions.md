<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->
This is a Next.js project using TypeScript, Tailwind CSS v4, shadcn/ui, and Neobrutalism Components.

## Commit Messages
Use conventional commits for commit messages. For example: `feat: add new feature` or `fix: fix a bug`.

## Branch Naming
Follow these branch naming conventions:
- `feat/feature-name` for new features
- `fix/bug-fix-name` for bug fixes
- `docs/documentation-updates` for documentation changes
- `chore/general-updates` for general updates or chores

## shadcn/ui
This project uses shadcn/ui for UI components.
- Custom components are located in `src/components`.
- UI components (often shadcn/ui based) are in `src/components/ui`.
- Refer to `components.json` for aliases:
    - `@/components` maps to `src/components`
    - `@/lib/utils` maps to `src/lib/utils`
    - `@/components/ui` maps to `src/components/ui`

## Neobrutalism Components
This project utilizes Neobrutalism Components, a collection of neobrutalism-styled components based on shadcn/ui. For examples and inspiration, refer to [https://github.com/ekmas/neobrutalism-components](https://github.com/ekmas/neobrutalism-components).
- When adding or using components from the neobrutalism ui library refer to the context provided here [context7 for Neobrutalism Components](https://context7.com/ekmas/neobrutalism-components/llms.txt).