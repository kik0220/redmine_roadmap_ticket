module RedmineRoadmapTicketFloat
  class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context={})
      if context[:controller]
        return stylesheet_link_tag("roadmap.css", :plugin => "redmine_roadmap_ticket_float", :media => "screen") +
            javascript_include_tag('jquery-1.10.2.min.js', :plugin => 'redmine_roadmap_ticket_float') +
            javascript_include_tag('bootstrap-2.3.2.min.js', :plugin => 'redmine_roadmap_ticket_float') +
            javascript_include_tag('roadmap.js', :plugin => 'redmine_roadmap_ticket_float')
      else
        return ''
      end
    end
  end
end
