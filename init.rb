require 'redmine'

require_dependency 'hooks/redmine_roadmap_ticket_float'

Redmine::Plugin.register :redmine_roadmap_ticket_float do
  name 'Redmine Roadmap Ticket Float plugin'
  author 'kik0220'
  description 'Roadmap Ticket Float'
  version '0.0.1'
  url 'https://github.com/kik0220/redmine_roadmap_ticket_float'
  author_url 'https://github.com/kik0220'
end
