Writing a good Git commit message is essential for clear communication and maintaining a well-organized codebase. A well-structured commit message can make it easier for you and your collaborators to understand the purpose and context of the changes. Here's a template for a well-structured Git commit message:

```xml
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- **Type:** Describes the purpose of the commit (e.g., feat, fix, chore, docs, style, refactor, test).
- **Scope:** Indicates the scope of the changes (e.g., module, component, file).
- **Subject:** A concise description of the change, written in the imperative mood (e.g., "Add feature," "Fix bug").
- **Body:** Provides additional context, details, and reasoning behind the change. Use this section when the subject alone isn't enough to convey the purpose.
- **Footer:** Optional. Use this section for references to issues, pull requests, or other related information.

Here's an example:
```
feat(user-auth): add password reset functionality

- Implemented password reset endpoint.
- Added email templates for password reset process.
- Updated user service to handle password resets.

Closes #123
```


Tips for writing effective Git commit messages:

1. Be Clear and Concise: Keep your messages short and to the point. The subject should be no more than 50 characters.
2. Use the Imperative Mood: Write commit messages as if you're giving a command. Instead of "Added feature," write "Add feature."
3. Separate Concerns: Divide your changes into separate commits if they address different concerns (e.g., bug fix and feature addition).
4. Provide Context: If necessary, explain why the change is needed and how it improves the codebase.
5. Reference Relevant Information: Use the footer to link to related issues, pull requests, or discussions.
6. Use Conventional Commit Messages: Following a consistent format helps maintain a standardized commit history. Tools like "commitlint" can enforce this format.

Remember that the "best" commit message can vary based on your team's conventions and the nature of your project. The key is to prioritize clarity, context, and consistency so that anyone reading the commit history can quickly understand the changes made and their purpose.