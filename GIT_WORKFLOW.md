# Git Workflow Guide for Pawvaro Website

This document outlines the recommended git workflow and best practices for the Pawvaro website project.

## 📋 Commit Message Convention

We use **Conventional Commits** format for consistent and clear commit messages:

```
type(scope): description
```

### Types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Reverting previous commits

### Examples:
```bash
feat: add new product showcase section
fix(contact): resolve form validation issue
docs: update README with new features
style: improve mobile responsiveness
chore: update dependencies
```

## 🌳 Branch Strategy

### Main Branches:
- `main`: Production-ready code
- `develop`: Integration branch for features (optional)

### Feature Branches:
- `feature/description`: New features
- `bugfix/description`: Bug fixes
- `hotfix/description`: Critical fixes

### Examples:
```bash
feature/product-filter
bugfix/mobile-menu
hotfix/contact-form-security
```

## 🚀 Recommended Workflow

### 1. Starting New Work
```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Making Changes
```bash
# Make your changes, then stage them
git add .

# Commit with proper message
git commit -m "feat: add new feature description"

# Push to remote
git push origin feature/your-feature-name
```

### 3. Merging Changes
```bash
# Switch to main
git checkout main

# Merge feature branch
git merge feature/your-feature-name

# Push to remote
git push origin main

# Clean up
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

## 🛡️ Git Hooks

We have automated hooks to ensure code quality:

### Pre-commit Hook:
- Checks for TODO/FIXME comments
- Warns about large files
- Scans for potential security issues
- Validates HTML file changes

### Commit Message Hook:
- Enforces conventional commit format
- Ensures descriptive commit messages

## 📁 File Organization

### What's Tracked:
- HTML, CSS, JavaScript files
- Images and assets
- Documentation files
- Configuration files

### What's Ignored (see .gitignore):
- OS generated files (.DS_Store, Thumbs.db)
- Editor files (.vscode, .idea)
- Temporary files
- Build artifacts
- Environment files

## 🔧 Useful Git Commands

### Daily Commands:
```bash
git status                    # Check current status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push origin branch-name   # Push to remote
git pull origin main          # Pull latest changes
```

### Branch Management:
```bash
git branch                    # List branches
git branch -a                 # List all branches (local + remote)
git checkout -b new-branch    # Create and switch to new branch
git branch -d branch-name     # Delete local branch
git push origin --delete branch-name  # Delete remote branch
```

### History and Logs:
```bash
git log --oneline             # Compact commit history
git log --graph --oneline     # Visual commit graph
git show commit-hash          # Show specific commit details
```

### Undoing Changes:
```bash
git checkout -- filename      # Discard changes to file
git reset HEAD filename       # Unstage file
git reset --soft HEAD~1       # Undo last commit (keep changes)
git reset --hard HEAD~1       # Undo last commit (discard changes)
```

## 🚨 Emergency Procedures

### Undo Last Commit:
```bash
git reset --soft HEAD~1       # Keep changes staged
git reset --hard HEAD~1       # Discard all changes
```

### Revert a Specific Commit:
```bash
git revert commit-hash        # Create new commit that undoes changes
```

### Force Push (Use with caution):
```bash
git push origin branch-name --force
```

## 📝 Best Practices

1. **Commit Often**: Make small, focused commits
2. **Write Clear Messages**: Use descriptive commit messages
3. **Test Before Committing**: Ensure your changes work
4. **Review Changes**: Use `git diff` before committing
5. **Keep Branches Clean**: Delete merged branches
6. **Backup Important Work**: Push to remote regularly
7. **Use Meaningful Branch Names**: Be descriptive
8. **Document Breaking Changes**: Update README when needed

## 🆘 Getting Help

If you encounter issues:
1. Check `git status` for current state
2. Review `git log --oneline` for recent commits
3. Use `git diff` to see what changed
4. Check this guide for common commands
5. Ask for help if stuck!

---

*This workflow ensures consistent, clean, and professional git practices for the Pawvaro website project.*
