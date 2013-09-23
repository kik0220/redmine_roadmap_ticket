module RedmineRoadmapTicket
  class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context={})
      if context[:controller]
        return javascript_include_tag('roadmap.js', :plugin => 'redmine_roadmap_ticket')
      else
        return ''
      end
    end
  end
end
