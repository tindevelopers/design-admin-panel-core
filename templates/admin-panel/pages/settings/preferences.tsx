'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Description,
  FormSelect,
  Label,
  Switch,
  SwitchField,
} from '../../../../components/primitives';
import Breadcrumb from '../../components/Breadcrumb';

export default function PreferencesSettings() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    darkMode: false,
    language: 'en',
    timezone: 'America/Los_Angeles',
  });

  const handleSave = () => {
    // Implement save logic
    console.log('Save preferences:', preferences);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <Breadcrumb />

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Preferences</h1>
      </div>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <p className="text-sm text-gray-500">
            Manage how you receive notifications
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <SwitchField name="emailNotifications">
              <Label>Email Notifications</Label>
              <Description>
                Receive email notifications for important updates
              </Description>
              <Switch
                checked={preferences.emailNotifications}
                onChange={() => togglePreference('emailNotifications')}
              />
            </SwitchField>

            <SwitchField name="pushNotifications">
              <Label>Push Notifications</Label>
              <Description>
                Receive push notifications on your devices
              </Description>
              <Switch
                checked={preferences.pushNotifications}
                onChange={() => togglePreference('pushNotifications')}
              />
            </SwitchField>

            <SwitchField name="weeklyReports">
              <Label>Weekly Reports</Label>
              <Description>
                Receive weekly summary reports via email
              </Description>
              <Switch
                checked={preferences.weeklyReports}
                onChange={() => togglePreference('weeklyReports')}
              />
            </SwitchField>
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Appearance</h3>
          <p className="text-sm text-gray-500">
            Customize how the interface looks
          </p>
        </CardHeader>
        <CardContent>
          <SwitchField name="darkMode">
            <Label>Dark Mode</Label>
            <Description>Use dark theme for the interface</Description>
            <Switch
              checked={preferences.darkMode}
              onChange={() => togglePreference('darkMode')}
            />
          </SwitchField>
        </CardContent>
      </Card>

      {/* Localization */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Localization</h3>
          <p className="text-sm text-gray-500">
            Set your language and timezone preferences
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <FormSelect
              label="Language"
              name="language"
              value={preferences.language}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  language: e.target.value,
                }))
              }
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
                { value: 'de', label: 'German' },
              ]}
            />

            <FormSelect
              label="Timezone"
              name="timezone"
              value={preferences.timezone}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  timezone: e.target.value,
                }))
              }
              options={[
                { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
                { value: 'America/Denver', label: 'Mountain Time (MT)' },
                { value: 'America/Chicago', label: 'Central Time (CT)' },
                { value: 'America/New_York', label: 'Eastern Time (ET)' },
              ]}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="primary" onClick={handleSave}>
          Save Preferences
        </Button>
        <Button variant="secondary">Reset to Defaults</Button>
      </div>
    </div>
  );
}
