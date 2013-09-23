require 'redmine'

require_dependency 'hooks/redmine_roadmap_ticket'

Redmine::Plugin.register :redmine_roadmap_ticket do
  name 'Redmine Roadmap Ticket plugin'
  author 'kik0220'
  description 'Roadmap Ticket'
  version '0.0.1'
  url 'https://github.com/kik0220/redmine_roadmap_ticket'
  author_url 'https://github.com/kik0220'
end
