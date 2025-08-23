# 🌿 Git Feature Branch Workflow Guide

## 🎯 Overview
This document outlines the Git workflow standards for the Luminary Co. website project. We follow a **feature branch workflow** to maintain code integrity and enable professional development practices.

---

## 🚀 **Current Development Status**

**Active Branch**: `feature/code-refactoring`  
**Current Phase**: Phase 3 - Code Refactoring & Optimization  
**Main Branch**: `main` (production-ready code)  

---

## 📋 **Feature Branch Workflow Process**

### **1. Starting New Work** 🆕

#### **Create Feature Branch**
```bash
# Ensure you're on main and up to date
git checkout main
git pull origin main

# Create and switch to new feature branch
git checkout -b feature/feature-name

# Example for our current work:
git checkout -b feature/code-refactoring
```

#### **Branch Naming Convention**
- **Features**: `feature/feature-name` (e.g., `feature/contact-form`)
- **Bug Fixes**: `bugfix/issue-description` (e.g., `bugfix/mobile-menu-bug`)
- **Hotfixes**: `hotfix/critical-fix` (e.g., `hotfix/security-patch`)
- **Refactoring**: `refactor/component-name` (e.g., `refactor/navigation-component`)

---

### **2. Development Work** 💻

#### **Regular Commits**
```bash
# Add changes
git add .

# Commit with descriptive message
git commit -m "✨ Add new feature description"

# Push branch to remote
git push origin feature/feature-name
```

#### **Commit Message Standards**
- **Format**: `type: description`
- **Types**: 
  - `✨` - New feature
  - `🐛` - Bug fix
  - `♻️` - Refactoring
  - `📝` - Documentation
  - `🎨` - UI/UX improvements
  - `⚡` - Performance improvements
  - `🔧` - Configuration changes

#### **Examples**:
```bash
git commit -m "✨ Add contact form validation"
git commit -m "🐛 Fix mobile menu toggle issue"
git commit -m "♻️ Refactor CSS into separate files"
git commit -m "📝 Update development documentation"
```

---

### **3. Pushing & Collaboration** 🤝

#### **Push Feature Branch**
```bash
# First time pushing a new branch
git push -u origin feature/feature-name

# Subsequent pushes
git push origin feature/feature-name
```

#### **Keep Branch Updated**
```bash
# While working on feature, periodically update from main
git checkout main
git pull origin main
git checkout feature/feature-name
git merge main
```

---

### **4. Code Review & Approval** 👀

#### **Create Pull Request**
1. **GitHub**: Go to repository and click "Compare & pull request"
2. **Title**: Clear description of the feature/fix
3. **Description**: Detailed explanation of changes
4. **Reviewers**: Assign team members for code review
5. **Labels**: Add appropriate labels (enhancement, bug, etc.)

#### **Pull Request Template**
```markdown
## 🎯 **Feature Description**
Brief description of what this PR accomplishes

## 🔧 **Changes Made**
- [ ] Change 1
- [ ] Change 2
- [ ] Change 3

## 🧪 **Testing**
- [ ] Feature tested locally
- [ ] Responsive design verified
- [ ] Cross-browser compatibility checked
- [ ] Performance impact assessed

## 📸 **Screenshots** (if applicable)
Add screenshots of UI changes

## ✅ **Ready for Review**
- [ ] Code follows project standards
- [ ] No console errors
- [ ] All tests passing
```

---

### **5. Merging & Cleanup** 🔄

#### **After Approval**
```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge feature branch
git merge feature/feature-name

# Push to remote
git push origin main

# Delete feature branch (local)
git branch -d feature/feature-name

# Delete feature branch (remote)
git push origin --delete feature/feature-name
```

---

## 🛠️ **Current Project Workflow**

### **Phase 3: Code Refactoring** 🔧
**Branch**: `feature/code-refactoring`  
**Goal**: Separate HTML, CSS, and JavaScript into individual files  

#### **Work in Progress**
- [x] **Branch Created** - `feature/code-refactoring`
- [ ] **CSS Extraction** - Move styles to `css/style.css`
- [ ] **JavaScript Extraction** - Move scripts to `js/script.js`
- [ ] **HTML Cleanup** - Remove embedded code
- [ ] **Testing** - Verify functionality after refactoring
- [ ] **Pull Request** - Create PR for review
- [ ] **Merge to Main** - After approval

---

## 📁 **Branch Management**

### **View All Branches**
```bash
# Local branches
git branch

# All branches (local + remote)
git branch -a

# Current branch with tracking info
git branch -vv
```

### **Switch Between Branches**
```bash
# Switch to existing branch
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Switch to main
git checkout main
```

### **Delete Branches**
```bash
# Delete local branch (after merging)
git branch -d branch-name

# Force delete local branch
git branch -D branch-name

# Delete remote branch
git push origin --delete branch-name
```

---

## 🚨 **Important Rules**

### **Never Work Directly on Main**
- ❌ **Don't**: `git checkout main` and make changes
- ✅ **Do**: Create feature branch for all development work

### **Always Pull Before Creating Branch**
- ❌ **Don't**: Create branch from outdated main
- ✅ **Do**: `git pull origin main` before creating feature branch

### **Test Before Merging**
- ❌ **Don't**: Merge untested code
- ✅ **Do**: Test thoroughly and create pull request for review

### **Keep Commits Atomic**
- ❌ **Don't**: Make one giant commit with multiple changes
- ✅ **Do**: Make small, focused commits with clear descriptions

---

## 🔍 **Troubleshooting**

### **Common Issues & Solutions**

#### **Branch Out of Sync with Main**
```bash
# Update feature branch with latest main
git checkout feature/feature-name
git fetch origin
git rebase origin/main
```

#### **Merge Conflicts**
```bash
# Resolve conflicts, then continue
git add .
git commit -m "🔧 Resolve merge conflicts"
git rebase --continue
```

#### **Accidental Commits to Main**
```bash
# Create backup branch
git checkout -b backup/main-backup

# Reset main to previous commit
git checkout main
git reset --hard HEAD~1

# Create proper feature branch
git checkout -b feature/proper-feature-name
```

---

## 📚 **Resources & References**

### **Git Commands Cheat Sheet**
- **Branching**: `git branch`, `git checkout`, `git merge`
- **Staging**: `git add`, `git reset`, `git status`
- **Committing**: `git commit`, `git log`, `git show`
- **Remote**: `git push`, `git pull`, `git fetch`
- **History**: `git log`, `git diff`, `git blame`

### **GitHub Features**
- **Pull Requests**: Code review and collaboration
- **Issues**: Bug tracking and feature requests
- **Projects**: Kanban boards for project management
- **Actions**: Automated CI/CD workflows

---

## 🎯 **Next Steps**

### **Immediate Actions**
1. **Continue Development** on `feature/code-refactoring`
2. **Regular Commits** with descriptive messages
3. **Push Updates** to remote branch
4. **Create Pull Request** when refactoring is complete

### **Long-term Goals**
- **Establish Workflow** as standard practice
- **Team Training** on Git workflow
- **Automated Testing** in CI/CD pipeline
- **Code Review Process** for all changes

---

*Last Updated: December 2024*  
*Current Branch: feature/code-refactoring*  
*Next Milestone: Complete CSS and JavaScript extraction*
