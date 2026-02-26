---
description: Generate a pre-deployment checklist
allowed-tools: Read, Write, Edit
argument-hint: [release-name or feature]
---

Create a deployment checklist for: $ARGUMENTS

## Discovery

Ask:
1. What's being deployed (feature, hotfix, release)?
2. What environments (staging → production)?
3. Are there database migrations?
4. Are there infrastructure changes?
5. Are there configuration or environment variable changes?
6. Is this a breaking change for any consumers?
7. What's the rollback plan?

## Checklist Generation

Create a comprehensive checklist:

### Pre-Deployment
- [ ] All tests passing in CI
- [ ] Code reviewed and approved
- [ ] Staging environment tested
- [ ] Database migrations tested on staging
- [ ] Performance impact assessed
- [ ] Security review completed (if applicable)
- [ ] Documentation updated
- [ ] Monitoring and alerts configured
- [ ] Stakeholders notified

### Deployment
- [ ] Backup current state
- [ ] Apply database migrations
- [ ] Deploy application code
- [ ] Verify health checks pass
- [ ] Run smoke tests
- [ ] Monitor error rates and latency

### Post-Deployment
- [ ] Verify key user flows work
- [ ] Check monitoring dashboards
- [ ] Confirm no spike in errors
- [ ] Update issue tracker (close deployed tickets)
- [ ] Notify stakeholders of successful deployment
- [ ] Document any issues encountered

### Rollback Plan
- [ ] Rollback steps documented
- [ ] Database rollback migrations ready
- [ ] Previous version artifacts available
- [ ] Rollback trigger criteria defined

## Output

Write the checklist to `deploy-checklist-[release-slug].md`.
