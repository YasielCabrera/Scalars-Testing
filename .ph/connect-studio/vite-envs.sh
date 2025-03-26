#!/bin/sh

replaceAll() {
    export inputString="$1"
    export pattern="$2"
    export replacement="$3"

    echo "$inputString" | awk '{
        gsub(ENVIRON["pattern"], ENVIRON["replacement"])
        print
    }'
}

html=$(echo "PCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0iVVRGLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+UG93ZXJob3VzZSBDb25uZWN0PC90aXRsZT48YmFzZSBocmVmPSIvIj48bGluayByZWw9Imljb24iIGhyZWY9Ii9pY29uLmljbyI+PCEtLSB2aXRlLWVudnMgc2NyaXB0IHBsYWNlaG9sZGVyIHhLc1BtTHMzMHN3S3NkSXNWeCAtLT48c2NyaXB0IHR5cGU9ImltcG9ydG1hcCI+ewogICJpbXBvcnRzIjogewogICAgInJlYWN0IjogImh0dHBzOi8vZXNtLnNoL3JlYWN0IiwKICAgICJyZWFjdC8iOiAiaHR0cHM6Ly9lc20uc2gvcmVhY3QvIiwKICAgICJyZWFjdC1kb20iOiAiaHR0cHM6Ly9lc20uc2gvcmVhY3QtZG9tIiwKICAgICJyZWFjdC1kb20vIjogImh0dHBzOi8vZXNtLnNoL3JlYWN0LWRvbS8iLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3NlciI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaW5kZXguanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9kb2N1bWVudC1tb2RlbCI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvZG9jdW1lbnQtbW9kZWwuanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9pbmRleCI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaW5kZXguanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9yZWFjdG9yIjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9yZWFjdG9yLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvY29udGV4dC9pbmRleCI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvY29udGV4dC9pbmRleC5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2NvbnRleHQvcmVhZC1tb2RlIjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9jb250ZXh0L3JlYWQtbW9kZS5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2NyeXB0by9icm93c2VyIjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9jcnlwdG8vYnJvd3Nlci5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2NyeXB0by9pbmRleCI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvY3J5cHRvL2luZGV4LmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvZG9jdW1lbnQtc3RhdGUiOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL2RvY3VtZW50LXN0YXRlLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvaW5kZXgiOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL2luZGV4LmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlQWRkRGVib3VuY2VkT3BlcmF0aW9ucyI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlQWRkRGVib3VuY2VkT3BlcmF0aW9ucy5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL3VzZUNvbm5lY3RDcnlwdG8iOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL3VzZUNvbm5lY3RDcnlwdG8uanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9ob29rcy91c2VEb2N1bWVudCI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlRG9jdW1lbnQuanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9ob29rcy91c2VEb2N1bWVudERpc3BhdGNoIjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9ob29rcy91c2VEb2N1bWVudERpc3BhdGNoLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlRG9jdW1lbnREcml2ZXMiOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL3VzZURvY3VtZW50RHJpdmVzLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlRG9jdW1lbnRFZGl0b3IiOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL3VzZURvY3VtZW50RWRpdG9yLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlRHJpdmVBY3Rpb25zIjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9ob29rcy91c2VEcml2ZUFjdGlvbnMuanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9ob29rcy91c2VEcml2ZUFjdGlvbnNXaXRoVWlOb2RlcyI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlRHJpdmVBY3Rpb25zV2l0aFVpTm9kZXMuanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9ob29rcy91c2VEcml2ZUNvbnRleHQiOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL3VzZURyaXZlQ29udGV4dC5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL3VzZVVpTm9kZXNDb250ZXh0IjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci9ob29rcy91c2VVaU5vZGVzQ29udGV4dC5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL2hvb2tzL3VzZVVzZXJQZXJtaXNzaW9ucyI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvaG9va3MvdXNlVXNlclBlcm1pc3Npb25zLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvcmVub3duL2NvbnN0YW50cyI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvcmVub3duL2NvbnN0YW50cy5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL3Jlbm93bi90eXBlcyI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvcmVub3duL3R5cGVzLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvc3RvcmFnZS9pbmRleCI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvc3RvcmFnZS9pbmRleC5qcyIsCiAgICAiQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL3N0b3JhZ2UvdHlwZXMiOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL3N0b3JhZ2UvdHlwZXMuanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci91aU5vZGVzL2NvbnN0YW50cyI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvdWlOb2Rlcy9jb25zdGFudHMuanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci91aU5vZGVzL3R5cGVzIjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci91aU5vZGVzL3R5cGVzLmpzIiwKICAgICJAcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvdXRpbHMvZXhwb3J0LWRvY3VtZW50IjogIi9tb2R1bGVzL0Bwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci91dGlscy9leHBvcnQtZG9jdW1lbnQuanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci91dGlscy9pbmRleCI6ICIvbW9kdWxlcy9AcG93ZXJob3VzZWRhby9yZWFjdG9yLWJyb3dzZXIvdXRpbHMvaW5kZXguanMiLAogICAgIkBwb3dlcmhvdXNlZGFvL3JlYWN0b3ItYnJvd3Nlci91dGlscy9zaWduYXR1cmUiOiAiL21vZHVsZXMvQHBvd2VyaG91c2VkYW8vcmVhY3Rvci1icm93c2VyL3V0aWxzL3NpZ25hdHVyZS5qcyIKICB9Cn08L3NjcmlwdD48c2NyaXB0IHR5cGU9Im1vZHVsZSIgY3Jvc3NvcmlnaW49IiIgc3JjPSIvYXNzZXRzL21haW4uQ3pFdzJSLUguanMiPjwvc2NyaXB0PjwvaGVhZD48Ym9keT48ZGl2IGlkPSJhcHAiPjwvZGl2PjwvYm9keT48L2h0bWw+" | base64 -d)

BASE_URL_base64="eEFwV2RSclg5OWtQclZnZ0UiLyIK"
BASE_URL=$(echo "Lwo=" | base64 -d)
MODE_base64="eEFwV2RSclg5OWtQclZnZ0UicHJvZHVjdGlvbiIK"
MODE=$(echo "cHJvZHVjdGlvbgo=" | base64 -d)
DEV_base64="eEFwV2RSclg5OWtQclZnZ0VmYWxzZQo="
DEV=$(echo "ZmFsc2UK" | base64 -d)
PROD_base64="eEFwV2RSclg5OWtQclZnZ0V0cnVlCg=="
PROD=$(echo "dHJ1ZQo=" | base64 -d)
if printenv APP_VERSION &> /dev/null; then
    APP_VERSION_base64=$(printenv APP_VERSION | base64)
else
    APP_VERSION_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
APP_VERSION=${APP_VERSION:-$(echo "Cg==" | base64 -d)}
REQUIRES_HARD_REFRESH_base64="eEFwV2RSclg5OWtQclZnZ0V0cnVlCg=="
REQUIRES_HARD_REFRESH=$(echo "dHJ1ZQo=" | base64 -d)
if printenv SENTRY_RELEASE &> /dev/null; then
    SENTRY_RELEASE_base64=$(printenv SENTRY_RELEASE | base64)
else
    SENTRY_RELEASE_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
SENTRY_RELEASE=${SENTRY_RELEASE:-$(echo "Cg==" | base64 -d)}
if printenv LOAD_EXTERNAL_PACKAGES &> /dev/null; then
    LOAD_EXTERNAL_PACKAGES_base64=$(printenv LOAD_EXTERNAL_PACKAGES | base64)
else
    LOAD_EXTERNAL_PACKAGES_base64="eEFwV2RSclg5OWtQclZnZ0UidHJ1ZSIK"
fi
LOAD_EXTERNAL_PACKAGES=${LOAD_EXTERNAL_PACKAGES:-$(echo "dHJ1ZQo=" | base64 -d)}
if printenv BASE_PATH &> /dev/null; then
    BASE_PATH_base64=$(printenv BASE_PATH | base64)
else
    BASE_PATH_base64="eEFwV2RSclg5OWtQclZnZ0UiLyIK"
fi
BASE_PATH=${BASE_PATH:-$(echo "Lwo=" | base64 -d)}
if printenv BASE_HREF &> /dev/null; then
    BASE_HREF_base64=$(printenv BASE_HREF | base64)
else
    BASE_HREF_base64="eEFwV2RSclg5OWtQclZnZ0UiLi8iCg=="
fi
BASE_HREF=${BASE_HREF:-$(echo "Li8K" | base64 -d)}
if printenv PH_CONNECT_APP_REQUIRES_HARD_REFRESH &> /dev/null; then
    PH_CONNECT_APP_REQUIRES_HARD_REFRESH_base64=$(printenv PH_CONNECT_APP_REQUIRES_HARD_REFRESH | base64)
else
    PH_CONNECT_APP_REQUIRES_HARD_REFRESH_base64="eEFwV2RSclg5OWtQclZnZ0UidHJ1ZSIK"
fi
PH_CONNECT_APP_REQUIRES_HARD_REFRESH=${PH_CONNECT_APP_REQUIRES_HARD_REFRESH:-$(echo "dHJ1ZQo=" | base64 -d)}
if printenv SENTRY_AUTH_TOKEN &> /dev/null; then
    SENTRY_AUTH_TOKEN_base64=$(printenv SENTRY_AUTH_TOKEN | base64)
else
    SENTRY_AUTH_TOKEN_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN:-$(echo "Cg==" | base64 -d)}
if printenv SENTRY_ORG &> /dev/null; then
    SENTRY_ORG_base64=$(printenv SENTRY_ORG | base64)
else
    SENTRY_ORG_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
SENTRY_ORG=${SENTRY_ORG:-$(echo "Cg==" | base64 -d)}
if printenv SENTRY_PROJECT &> /dev/null; then
    SENTRY_PROJECT_base64=$(printenv SENTRY_PROJECT | base64)
else
    SENTRY_PROJECT_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
SENTRY_PROJECT=${SENTRY_PROJECT:-$(echo "Cg==" | base64 -d)}
if printenv LOG_LEVEL &> /dev/null; then
    LOG_LEVEL_base64=$(printenv LOG_LEVEL | base64)
else
    LOG_LEVEL_base64="eEFwV2RSclg5OWtQclZnZ0UiZGVidWciCg=="
fi
LOG_LEVEL=${LOG_LEVEL:-$(echo "ZGVidWcK" | base64 -d)}
if printenv PH_CONNECT_WARN_OUTDATED_APP &> /dev/null; then
    PH_CONNECT_WARN_OUTDATED_APP_base64=$(printenv PH_CONNECT_WARN_OUTDATED_APP | base64)
else
    PH_CONNECT_WARN_OUTDATED_APP_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_WARN_OUTDATED_APP=${PH_CONNECT_WARN_OUTDATED_APP:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_STUDIO_MODE &> /dev/null; then
    PH_CONNECT_STUDIO_MODE_base64=$(printenv PH_CONNECT_STUDIO_MODE | base64)
else
    PH_CONNECT_STUDIO_MODE_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_STUDIO_MODE=${PH_CONNECT_STUDIO_MODE:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_ROUTER_BASENAME &> /dev/null; then
    PH_CONNECT_ROUTER_BASENAME_base64=$(printenv PH_CONNECT_ROUTER_BASENAME | base64)
else
    PH_CONNECT_ROUTER_BASENAME_base64="eEFwV2RSclg5OWtQclZnZ0UiLyIK"
fi
PH_CONNECT_ROUTER_BASENAME=${PH_CONNECT_ROUTER_BASENAME:-$(echo "Lwo=" | base64 -d)}
if printenv PH_CONNECT_DEFAULT_DRIVES_URL &> /dev/null; then
    PH_CONNECT_DEFAULT_DRIVES_URL_base64=$(printenv PH_CONNECT_DEFAULT_DRIVES_URL | base64)
else
    PH_CONNECT_DEFAULT_DRIVES_URL_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_DEFAULT_DRIVES_URL=${PH_CONNECT_DEFAULT_DRIVES_URL:-$(echo "Cg==" | base64 -d)}
if printenv PH_CONNECT_ENABLED_EDITORS &> /dev/null; then
    PH_CONNECT_ENABLED_EDITORS_base64=$(printenv PH_CONNECT_ENABLED_EDITORS | base64)
else
    PH_CONNECT_ENABLED_EDITORS_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_ENABLED_EDITORS=${PH_CONNECT_ENABLED_EDITORS:-$(echo "Cg==" | base64 -d)}
if printenv PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES &> /dev/null; then
    PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES_base64=$(printenv PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES | base64)
else
    PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES=${PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_SEARCH_BAR_ENABLED &> /dev/null; then
    PH_CONNECT_SEARCH_BAR_ENABLED_base64=$(printenv PH_CONNECT_SEARCH_BAR_ENABLED | base64)
else
    PH_CONNECT_SEARCH_BAR_ENABLED_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_SEARCH_BAR_ENABLED=${PH_CONNECT_SEARCH_BAR_ENABLED:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES &> /dev/null; then
    PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES_base64=$(printenv PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES | base64)
else
    PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES=${PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES &> /dev/null; then
    PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES_base64=$(printenv PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES | base64)
else
    PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES=${PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES &> /dev/null; then
    PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES_base64=$(printenv PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES | base64)
else
    PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES=${PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES &> /dev/null; then
    PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES_base64=$(printenv PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES | base64)
else
    PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES=${PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES &> /dev/null; then
    PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES_base64=$(printenv PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES | base64)
else
    PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES=${PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_PUBLIC_DRIVES_ENABLED &> /dev/null; then
    PH_CONNECT_PUBLIC_DRIVES_ENABLED_base64=$(printenv PH_CONNECT_PUBLIC_DRIVES_ENABLED | base64)
else
    PH_CONNECT_PUBLIC_DRIVES_ENABLED_base64="eEFwV2RSclg5OWtQclZnZ0UidHJ1ZSIK"
fi
PH_CONNECT_PUBLIC_DRIVES_ENABLED=${PH_CONNECT_PUBLIC_DRIVES_ENABLED:-$(echo "dHJ1ZQo=" | base64 -d)}
if printenv PH_CONNECT_CLOUD_DRIVES_ENABLED &> /dev/null; then
    PH_CONNECT_CLOUD_DRIVES_ENABLED_base64=$(printenv PH_CONNECT_CLOUD_DRIVES_ENABLED | base64)
else
    PH_CONNECT_CLOUD_DRIVES_ENABLED_base64="eEFwV2RSclg5OWtQclZnZ0UidHJ1ZSIK"
fi
PH_CONNECT_CLOUD_DRIVES_ENABLED=${PH_CONNECT_CLOUD_DRIVES_ENABLED:-$(echo "dHJ1ZQo=" | base64 -d)}
if printenv PH_CONNECT_LOCAL_DRIVES_ENABLED &> /dev/null; then
    PH_CONNECT_LOCAL_DRIVES_ENABLED_base64=$(printenv PH_CONNECT_LOCAL_DRIVES_ENABLED | base64)
else
    PH_CONNECT_LOCAL_DRIVES_ENABLED_base64="eEFwV2RSclg5OWtQclZnZ0UidHJ1ZSIK"
fi
PH_CONNECT_LOCAL_DRIVES_ENABLED=${PH_CONNECT_LOCAL_DRIVES_ENABLED:-$(echo "dHJ1ZQo=" | base64 -d)}
if printenv PH_CONNECT_ARBITRUM_ALLOW_LIST &> /dev/null; then
    PH_CONNECT_ARBITRUM_ALLOW_LIST_base64=$(printenv PH_CONNECT_ARBITRUM_ALLOW_LIST | base64)
else
    PH_CONNECT_ARBITRUM_ALLOW_LIST_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_ARBITRUM_ALLOW_LIST=${PH_CONNECT_ARBITRUM_ALLOW_LIST:-$(echo "Cg==" | base64 -d)}
if printenv PH_CONNECT_RWA_ALLOW_LIST &> /dev/null; then
    PH_CONNECT_RWA_ALLOW_LIST_base64=$(printenv PH_CONNECT_RWA_ALLOW_LIST | base64)
else
    PH_CONNECT_RWA_ALLOW_LIST_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_RWA_ALLOW_LIST=${PH_CONNECT_RWA_ALLOW_LIST:-$(echo "Cg==" | base64 -d)}
if printenv PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS &> /dev/null; then
    PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS_base64=$(printenv PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS | base64)
else
    PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS_base64="eEFwV2RSclg5OWtQclZnZ0UidHJ1ZSIK"
fi
PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS=${PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS:-$(echo "dHJ1ZQo=" | base64 -d)}
if printenv PH_CONNECT_RENOWN_URL &> /dev/null; then
    PH_CONNECT_RENOWN_URL_base64=$(printenv PH_CONNECT_RENOWN_URL | base64)
else
    PH_CONNECT_RENOWN_URL_base64="eEFwV2RSclg5OWtQclZnZ0UiaHR0cHM6Ly9hdXRoLnJlbm93bi5pZCIK"
fi
PH_CONNECT_RENOWN_URL=${PH_CONNECT_RENOWN_URL:-$(echo "aHR0cHM6Ly9hdXRoLnJlbm93bi5pZAo=" | base64 -d)}
if printenv PH_CONNECT_RENOWN_NETWORK_ID &> /dev/null; then
    PH_CONNECT_RENOWN_NETWORK_ID_base64=$(printenv PH_CONNECT_RENOWN_NETWORK_ID | base64)
else
    PH_CONNECT_RENOWN_NETWORK_ID_base64="eEFwV2RSclg5OWtQclZnZ0UiZWlwMTU1Igo="
fi
PH_CONNECT_RENOWN_NETWORK_ID=${PH_CONNECT_RENOWN_NETWORK_ID:-$(echo "ZWlwMTU1Cg==" | base64 -d)}
if printenv PH_CONNECT_RENOWN_CHAIN_ID &> /dev/null; then
    PH_CONNECT_RENOWN_CHAIN_ID_base64=$(printenv PH_CONNECT_RENOWN_CHAIN_ID | base64)
else
    PH_CONNECT_RENOWN_CHAIN_ID_base64="eEFwV2RSclg5OWtQclZnZ0UiMSIK"
fi
PH_CONNECT_RENOWN_CHAIN_ID=${PH_CONNECT_RENOWN_CHAIN_ID:-$(echo "MQo=" | base64 -d)}
if printenv PH_CONNECT_DISABLED_EDITORS &> /dev/null; then
    PH_CONNECT_DISABLED_EDITORS_base64=$(printenv PH_CONNECT_DISABLED_EDITORS | base64)
else
    PH_CONNECT_DISABLED_EDITORS_base64="eEFwV2RSclg5OWtQclZnZ0UicG93ZXJob3VzZS9kb2N1bWVudC1kcml2ZSIK"
fi
PH_CONNECT_DISABLED_EDITORS=${PH_CONNECT_DISABLED_EDITORS:-$(echo "cG93ZXJob3VzZS9kb2N1bWVudC1kcml2ZQo=" | base64 -d)}
if printenv PH_CONNECT_SENTRY_DSN &> /dev/null; then
    PH_CONNECT_SENTRY_DSN_base64=$(printenv PH_CONNECT_SENTRY_DSN | base64)
else
    PH_CONNECT_SENTRY_DSN_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_SENTRY_DSN=${PH_CONNECT_SENTRY_DSN:-$(echo "Cg==" | base64 -d)}
if printenv PH_CONNECT_SENTRY_PROJECT &> /dev/null; then
    PH_CONNECT_SENTRY_PROJECT_base64=$(printenv PH_CONNECT_SENTRY_PROJECT | base64)
else
    PH_CONNECT_SENTRY_PROJECT_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_SENTRY_PROJECT=${PH_CONNECT_SENTRY_PROJECT:-$(echo "Cg==" | base64 -d)}
if printenv PH_CONNECT_SENTRY_ENV &> /dev/null; then
    PH_CONNECT_SENTRY_ENV_base64=$(printenv PH_CONNECT_SENTRY_ENV | base64)
else
    PH_CONNECT_SENTRY_ENV_base64="eEFwV2RSclg5OWtQclZnZ0UicHJvZCIK"
fi
PH_CONNECT_SENTRY_ENV=${PH_CONNECT_SENTRY_ENV:-$(echo "cHJvZAo=" | base64 -d)}
if printenv PH_CONNECT_SENTRY_TRACING_ENABLED &> /dev/null; then
    PH_CONNECT_SENTRY_TRACING_ENABLED_base64=$(printenv PH_CONNECT_SENTRY_TRACING_ENABLED | base64)
else
    PH_CONNECT_SENTRY_TRACING_ENABLED_base64="eEFwV2RSclg5OWtQclZnZ0UiZmFsc2UiCg=="
fi
PH_CONNECT_SENTRY_TRACING_ENABLED=${PH_CONNECT_SENTRY_TRACING_ENABLED:-$(echo "ZmFsc2UK" | base64 -d)}
if printenv PH_CONNECT_GA_TRACKING_ID &> /dev/null; then
    PH_CONNECT_GA_TRACKING_ID_base64=$(printenv PH_CONNECT_GA_TRACKING_ID | base64)
else
    PH_CONNECT_GA_TRACKING_ID_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_GA_TRACKING_ID=${PH_CONNECT_GA_TRACKING_ID:-$(echo "Cg==" | base64 -d)}
if printenv LOCAL_DOCUMENT_MODELS &> /dev/null; then
    LOCAL_DOCUMENT_MODELS_base64=$(printenv LOCAL_DOCUMENT_MODELS | base64)
else
    LOCAL_DOCUMENT_MODELS_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
LOCAL_DOCUMENT_MODELS=${LOCAL_DOCUMENT_MODELS:-$(echo "Cg==" | base64 -d)}
if printenv LOCAL_DOCUMENT_EDITORS &> /dev/null; then
    LOCAL_DOCUMENT_EDITORS_base64=$(printenv LOCAL_DOCUMENT_EDITORS | base64)
else
    LOCAL_DOCUMENT_EDITORS_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
LOCAL_DOCUMENT_EDITORS=${LOCAL_DOCUMENT_EDITORS:-$(echo "Cg==" | base64 -d)}
if printenv FILE_UPLOAD_OPERATIONS_CHUNK_SIZE &> /dev/null; then
    FILE_UPLOAD_OPERATIONS_CHUNK_SIZE_base64=$(printenv FILE_UPLOAD_OPERATIONS_CHUNK_SIZE | base64)
else
    FILE_UPLOAD_OPERATIONS_CHUNK_SIZE_base64="eEFwV2RSclg5OWtQclZnZ0UiNTAiCg=="
fi
FILE_UPLOAD_OPERATIONS_CHUNK_SIZE=${FILE_UPLOAD_OPERATIONS_CHUNK_SIZE:-$(echo "NTAK" | base64 -d)}
if printenv PH_CONNECT_VERSION_CHECK_INTERVAL &> /dev/null; then
    PH_CONNECT_VERSION_CHECK_INTERVAL_base64=$(printenv PH_CONNECT_VERSION_CHECK_INTERVAL | base64)
else
    PH_CONNECT_VERSION_CHECK_INTERVAL_base64="eEFwV2RSclg5OWtQclZnZ0UiMzYwMDAwMCIK"
fi
PH_CONNECT_VERSION_CHECK_INTERVAL=${PH_CONNECT_VERSION_CHECK_INTERVAL:-$(echo "MzYwMDAwMAo=" | base64 -d)}
if printenv PH_CONNECT_CLI_VERSION &> /dev/null; then
    PH_CONNECT_CLI_VERSION_base64=$(printenv PH_CONNECT_CLI_VERSION | base64)
else
    PH_CONNECT_CLI_VERSION_base64="eEFwV2RSclg5OWtQclZnZ0UiIgo="
fi
PH_CONNECT_CLI_VERSION=${PH_CONNECT_CLI_VERSION:-$(echo "Cg==" | base64 -d)}

processedHtml="$html"

processedHtml=$(replaceAll "$processedHtml" "%BASE_URL%" "BASE_URLxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%MODE%" "MODExPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%DEV%" "DEVxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PROD%" "PRODxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%APP_VERSION%" "APP_VERSIONxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%REQUIRES_HARD_REFRESH%" "REQUIRES_HARD_REFRESHxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%SENTRY_RELEASE%" "SENTRY_RELEASExPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%LOAD_EXTERNAL_PACKAGES%" "LOAD_EXTERNAL_PACKAGESxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%BASE_PATH%" "BASE_PATHxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%BASE_HREF%" "BASE_HREFxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_APP_REQUIRES_HARD_REFRESH%" "PH_CONNECT_APP_REQUIRES_HARD_REFRESHxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%SENTRY_AUTH_TOKEN%" "SENTRY_AUTH_TOKENxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%SENTRY_ORG%" "SENTRY_ORGxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%SENTRY_PROJECT%" "SENTRY_PROJECTxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%LOG_LEVEL%" "LOG_LEVELxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_WARN_OUTDATED_APP%" "PH_CONNECT_WARN_OUTDATED_APPxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_STUDIO_MODE%" "PH_CONNECT_STUDIO_MODExPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_ROUTER_BASENAME%" "PH_CONNECT_ROUTER_BASENAMExPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DEFAULT_DRIVES_URL%" "PH_CONNECT_DEFAULT_DRIVES_URLxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_ENABLED_EDITORS%" "PH_CONNECT_ENABLED_EDITORSxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES%" "PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVESxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_SEARCH_BAR_ENABLED%" "PH_CONNECT_SEARCH_BAR_ENABLEDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES%" "PH_CONNECT_DISABLE_ADD_CLOUD_DRIVESxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES%" "PH_CONNECT_DISABLE_ADD_LOCAL_DRIVESxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES%" "PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVESxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES%" "PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVESxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES%" "PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVESxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_PUBLIC_DRIVES_ENABLED%" "PH_CONNECT_PUBLIC_DRIVES_ENABLEDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_CLOUD_DRIVES_ENABLED%" "PH_CONNECT_CLOUD_DRIVES_ENABLEDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_LOCAL_DRIVES_ENABLED%" "PH_CONNECT_LOCAL_DRIVES_ENABLEDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_ARBITRUM_ALLOW_LIST%" "PH_CONNECT_ARBITRUM_ALLOW_LISTxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_RWA_ALLOW_LIST%" "PH_CONNECT_RWA_ALLOW_LISTxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS%" "PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGSxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_RENOWN_URL%" "PH_CONNECT_RENOWN_URLxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_RENOWN_NETWORK_ID%" "PH_CONNECT_RENOWN_NETWORK_IDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_RENOWN_CHAIN_ID%" "PH_CONNECT_RENOWN_CHAIN_IDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_DISABLED_EDITORS%" "PH_CONNECT_DISABLED_EDITORSxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_SENTRY_DSN%" "PH_CONNECT_SENTRY_DSNxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_SENTRY_PROJECT%" "PH_CONNECT_SENTRY_PROJECTxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_SENTRY_ENV%" "PH_CONNECT_SENTRY_ENVxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_SENTRY_TRACING_ENABLED%" "PH_CONNECT_SENTRY_TRACING_ENABLEDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_GA_TRACKING_ID%" "PH_CONNECT_GA_TRACKING_IDxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%LOCAL_DOCUMENT_MODELS%" "LOCAL_DOCUMENT_MODELSxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%LOCAL_DOCUMENT_EDITORS%" "LOCAL_DOCUMENT_EDITORSxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%FILE_UPLOAD_OPERATIONS_CHUNK_SIZE%" "FILE_UPLOAD_OPERATIONS_CHUNK_SIZExPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_VERSION_CHECK_INTERVAL%" "PH_CONNECT_VERSION_CHECK_INTERVALxPsZs9swrPvxYpC")
processedHtml=$(replaceAll "$processedHtml" "%PH_CONNECT_CLI_VERSION%" "PH_CONNECT_CLI_VERSIONxPsZs9swrPvxYpC")

processedHtml=$(replaceAll "$processedHtml" "BASE_URLxPsZs9swrPvxYpC" "$BASE_URL")
processedHtml=$(replaceAll "$processedHtml" "MODExPsZs9swrPvxYpC" "$MODE")
processedHtml=$(replaceAll "$processedHtml" "DEVxPsZs9swrPvxYpC" "$DEV")
processedHtml=$(replaceAll "$processedHtml" "PRODxPsZs9swrPvxYpC" "$PROD")
processedHtml=$(replaceAll "$processedHtml" "APP_VERSIONxPsZs9swrPvxYpC" "$APP_VERSION")
processedHtml=$(replaceAll "$processedHtml" "REQUIRES_HARD_REFRESHxPsZs9swrPvxYpC" "$REQUIRES_HARD_REFRESH")
processedHtml=$(replaceAll "$processedHtml" "SENTRY_RELEASExPsZs9swrPvxYpC" "$SENTRY_RELEASE")
processedHtml=$(replaceAll "$processedHtml" "LOAD_EXTERNAL_PACKAGESxPsZs9swrPvxYpC" "$LOAD_EXTERNAL_PACKAGES")
processedHtml=$(replaceAll "$processedHtml" "BASE_PATHxPsZs9swrPvxYpC" "$BASE_PATH")
processedHtml=$(replaceAll "$processedHtml" "BASE_HREFxPsZs9swrPvxYpC" "$BASE_HREF")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_APP_REQUIRES_HARD_REFRESHxPsZs9swrPvxYpC" "$PH_CONNECT_APP_REQUIRES_HARD_REFRESH")
processedHtml=$(replaceAll "$processedHtml" "SENTRY_AUTH_TOKENxPsZs9swrPvxYpC" "$SENTRY_AUTH_TOKEN")
processedHtml=$(replaceAll "$processedHtml" "SENTRY_ORGxPsZs9swrPvxYpC" "$SENTRY_ORG")
processedHtml=$(replaceAll "$processedHtml" "SENTRY_PROJECTxPsZs9swrPvxYpC" "$SENTRY_PROJECT")
processedHtml=$(replaceAll "$processedHtml" "LOG_LEVELxPsZs9swrPvxYpC" "$LOG_LEVEL")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_WARN_OUTDATED_APPxPsZs9swrPvxYpC" "$PH_CONNECT_WARN_OUTDATED_APP")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_STUDIO_MODExPsZs9swrPvxYpC" "$PH_CONNECT_STUDIO_MODE")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_ROUTER_BASENAMExPsZs9swrPvxYpC" "$PH_CONNECT_ROUTER_BASENAME")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DEFAULT_DRIVES_URLxPsZs9swrPvxYpC" "$PH_CONNECT_DEFAULT_DRIVES_URL")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_ENABLED_EDITORSxPsZs9swrPvxYpC" "$PH_CONNECT_ENABLED_EDITORS")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVESxPsZs9swrPvxYpC" "$PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_SEARCH_BAR_ENABLEDxPsZs9swrPvxYpC" "$PH_CONNECT_SEARCH_BAR_ENABLED")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DISABLE_ADD_CLOUD_DRIVESxPsZs9swrPvxYpC" "$PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DISABLE_ADD_LOCAL_DRIVESxPsZs9swrPvxYpC" "$PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVESxPsZs9swrPvxYpC" "$PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVESxPsZs9swrPvxYpC" "$PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVESxPsZs9swrPvxYpC" "$PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_PUBLIC_DRIVES_ENABLEDxPsZs9swrPvxYpC" "$PH_CONNECT_PUBLIC_DRIVES_ENABLED")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_CLOUD_DRIVES_ENABLEDxPsZs9swrPvxYpC" "$PH_CONNECT_CLOUD_DRIVES_ENABLED")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_LOCAL_DRIVES_ENABLEDxPsZs9swrPvxYpC" "$PH_CONNECT_LOCAL_DRIVES_ENABLED")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_ARBITRUM_ALLOW_LISTxPsZs9swrPvxYpC" "$PH_CONNECT_ARBITRUM_ALLOW_LIST")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_RWA_ALLOW_LISTxPsZs9swrPvxYpC" "$PH_CONNECT_RWA_ALLOW_LIST")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGSxPsZs9swrPvxYpC" "$PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_RENOWN_URLxPsZs9swrPvxYpC" "$PH_CONNECT_RENOWN_URL")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_RENOWN_NETWORK_IDxPsZs9swrPvxYpC" "$PH_CONNECT_RENOWN_NETWORK_ID")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_RENOWN_CHAIN_IDxPsZs9swrPvxYpC" "$PH_CONNECT_RENOWN_CHAIN_ID")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_DISABLED_EDITORSxPsZs9swrPvxYpC" "$PH_CONNECT_DISABLED_EDITORS")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_SENTRY_DSNxPsZs9swrPvxYpC" "$PH_CONNECT_SENTRY_DSN")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_SENTRY_PROJECTxPsZs9swrPvxYpC" "$PH_CONNECT_SENTRY_PROJECT")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_SENTRY_ENVxPsZs9swrPvxYpC" "$PH_CONNECT_SENTRY_ENV")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_SENTRY_TRACING_ENABLEDxPsZs9swrPvxYpC" "$PH_CONNECT_SENTRY_TRACING_ENABLED")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_GA_TRACKING_IDxPsZs9swrPvxYpC" "$PH_CONNECT_GA_TRACKING_ID")
processedHtml=$(replaceAll "$processedHtml" "LOCAL_DOCUMENT_MODELSxPsZs9swrPvxYpC" "$LOCAL_DOCUMENT_MODELS")
processedHtml=$(replaceAll "$processedHtml" "LOCAL_DOCUMENT_EDITORSxPsZs9swrPvxYpC" "$LOCAL_DOCUMENT_EDITORS")
processedHtml=$(replaceAll "$processedHtml" "FILE_UPLOAD_OPERATIONS_CHUNK_SIZExPsZs9swrPvxYpC" "$FILE_UPLOAD_OPERATIONS_CHUNK_SIZE")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_VERSION_CHECK_INTERVALxPsZs9swrPvxYpC" "$PH_CONNECT_VERSION_CHECK_INTERVAL")
processedHtml=$(replaceAll "$processedHtml" "PH_CONNECT_CLI_VERSIONxPsZs9swrPvxYpC" "$PH_CONNECT_CLI_VERSION")

json=""
json="$json{"
json="$json\"BASE_URL\":\`$BASE_URL_base64\`,"
json="$json\"MODE\":\`$MODE_base64\`,"
json="$json\"DEV\":\`$DEV_base64\`,"
json="$json\"PROD\":\`$PROD_base64\`,"
json="$json\"APP_VERSION\":\`$APP_VERSION_base64\`,"
json="$json\"REQUIRES_HARD_REFRESH\":\`$REQUIRES_HARD_REFRESH_base64\`,"
json="$json\"SENTRY_RELEASE\":\`$SENTRY_RELEASE_base64\`,"
json="$json\"LOAD_EXTERNAL_PACKAGES\":\`$LOAD_EXTERNAL_PACKAGES_base64\`,"
json="$json\"BASE_PATH\":\`$BASE_PATH_base64\`,"
json="$json\"BASE_HREF\":\`$BASE_HREF_base64\`,"
json="$json\"PH_CONNECT_APP_REQUIRES_HARD_REFRESH\":\`$PH_CONNECT_APP_REQUIRES_HARD_REFRESH_base64\`,"
json="$json\"SENTRY_AUTH_TOKEN\":\`$SENTRY_AUTH_TOKEN_base64\`,"
json="$json\"SENTRY_ORG\":\`$SENTRY_ORG_base64\`,"
json="$json\"SENTRY_PROJECT\":\`$SENTRY_PROJECT_base64\`,"
json="$json\"LOG_LEVEL\":\`$LOG_LEVEL_base64\`,"
json="$json\"PH_CONNECT_WARN_OUTDATED_APP\":\`$PH_CONNECT_WARN_OUTDATED_APP_base64\`,"
json="$json\"PH_CONNECT_STUDIO_MODE\":\`$PH_CONNECT_STUDIO_MODE_base64\`,"
json="$json\"PH_CONNECT_ROUTER_BASENAME\":\`$PH_CONNECT_ROUTER_BASENAME_base64\`,"
json="$json\"PH_CONNECT_DEFAULT_DRIVES_URL\":\`$PH_CONNECT_DEFAULT_DRIVES_URL_base64\`,"
json="$json\"PH_CONNECT_ENABLED_EDITORS\":\`$PH_CONNECT_ENABLED_EDITORS_base64\`,"
json="$json\"PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES\":\`$PH_CONNECT_DISABLE_ADD_PUBLIC_DRIVES_base64\`,"
json="$json\"PH_CONNECT_SEARCH_BAR_ENABLED\":\`$PH_CONNECT_SEARCH_BAR_ENABLED_base64\`,"
json="$json\"PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES\":\`$PH_CONNECT_DISABLE_ADD_CLOUD_DRIVES_base64\`,"
json="$json\"PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES\":\`$PH_CONNECT_DISABLE_ADD_LOCAL_DRIVES_base64\`,"
json="$json\"PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES\":\`$PH_CONNECT_DISABLE_DELETE_PUBLIC_DRIVES_base64\`,"
json="$json\"PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES\":\`$PH_CONNECT_DISABLE_DELETE_CLOUD_DRIVES_base64\`,"
json="$json\"PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES\":\`$PH_CONNECT_DISABLE_DELETE_LOCAL_DRIVES_base64\`,"
json="$json\"PH_CONNECT_PUBLIC_DRIVES_ENABLED\":\`$PH_CONNECT_PUBLIC_DRIVES_ENABLED_base64\`,"
json="$json\"PH_CONNECT_CLOUD_DRIVES_ENABLED\":\`$PH_CONNECT_CLOUD_DRIVES_ENABLED_base64\`,"
json="$json\"PH_CONNECT_LOCAL_DRIVES_ENABLED\":\`$PH_CONNECT_LOCAL_DRIVES_ENABLED_base64\`,"
json="$json\"PH_CONNECT_ARBITRUM_ALLOW_LIST\":\`$PH_CONNECT_ARBITRUM_ALLOW_LIST_base64\`,"
json="$json\"PH_CONNECT_RWA_ALLOW_LIST\":\`$PH_CONNECT_RWA_ALLOW_LIST_base64\`,"
json="$json\"PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS\":\`$PH_CONNECT_HIDE_DOCUMENT_MODEL_SELECTION_SETTINGS_base64\`,"
json="$json\"PH_CONNECT_RENOWN_URL\":\`$PH_CONNECT_RENOWN_URL_base64\`,"
json="$json\"PH_CONNECT_RENOWN_NETWORK_ID\":\`$PH_CONNECT_RENOWN_NETWORK_ID_base64\`,"
json="$json\"PH_CONNECT_RENOWN_CHAIN_ID\":\`$PH_CONNECT_RENOWN_CHAIN_ID_base64\`,"
json="$json\"PH_CONNECT_DISABLED_EDITORS\":\`$PH_CONNECT_DISABLED_EDITORS_base64\`,"
json="$json\"PH_CONNECT_SENTRY_DSN\":\`$PH_CONNECT_SENTRY_DSN_base64\`,"
json="$json\"PH_CONNECT_SENTRY_PROJECT\":\`$PH_CONNECT_SENTRY_PROJECT_base64\`,"
json="$json\"PH_CONNECT_SENTRY_ENV\":\`$PH_CONNECT_SENTRY_ENV_base64\`,"
json="$json\"PH_CONNECT_SENTRY_TRACING_ENABLED\":\`$PH_CONNECT_SENTRY_TRACING_ENABLED_base64\`,"
json="$json\"PH_CONNECT_GA_TRACKING_ID\":\`$PH_CONNECT_GA_TRACKING_ID_base64\`,"
json="$json\"LOCAL_DOCUMENT_MODELS\":\`$LOCAL_DOCUMENT_MODELS_base64\`,"
json="$json\"LOCAL_DOCUMENT_EDITORS\":\`$LOCAL_DOCUMENT_EDITORS_base64\`,"
json="$json\"FILE_UPLOAD_OPERATIONS_CHUNK_SIZE\":\`$FILE_UPLOAD_OPERATIONS_CHUNK_SIZE_base64\`,"
json="$json\"PH_CONNECT_VERSION_CHECK_INTERVAL\":\`$PH_CONNECT_VERSION_CHECK_INTERVAL_base64\`,"
json="$json\"PH_CONNECT_CLI_VERSION\":\`$PH_CONNECT_CLI_VERSION_base64\`"
json="$json}"

script="
    <script data-script-description=\"Environment variables injected by vite-envs\">
      var envWithValuesInBase64 = $json;
      var env = {};
      Object.keys(envWithValuesInBase64).forEach(function (name) {
        const value = new TextDecoder().decode(
          Uint8Array.from(
            atob(envWithValuesInBase64[name]),
            c => c.charCodeAt(0))
        ).slice(0,-1);
        env[name] = value.startsWith(\"xApWdRrX99kPrVggE\") ? JSON.parse(value.slice(\"xApWdRrX99kPrVggE\".length)) : value;
      });
      window.__VITE_ENVS = env;
    </script>"

scriptPlaceholder="<!-- vite-envs script placeholder xKsPmLs30swKsdIsVx -->"

processedHtml=$(replaceAll "$processedHtml" "$scriptPlaceholder" "$script")

DIR=$(cd "$(dirname "$0")" && pwd)

echo "$processedHtml" > "$DIR/index.html"

swEnv_script="
const envWithValuesInBase64 = $json;
const env = {};
Object.keys(envWithValuesInBase64).forEach(function (name) {
  const value = new TextDecoder().decode(
    Uint8Array.from(
      atob(envWithValuesInBase64[name]),
      c => c.charCodeAt(0))
  ).slice(0,-1);
  env[name] = value.startsWith(\"xApWdRrX99kPrVggE\") ? JSON.parse(value.slice(\"xApWdRrX99kPrVggE\".length)) : value;
});
self.__VITE_ENVS = env;
"

echo "$swEnv_script" > "$DIR/swEnv.js" || echo "Not enough permissions to write to $DIR/swEnv.js"
