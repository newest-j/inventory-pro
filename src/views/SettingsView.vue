<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <side-bar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header
        class="header bg-white border-bottom d-flex justify-content-between align-items-center px-4 py-3"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        }"
      >
        <div class="d-flex align-items-center">
          <offcanvas class="me-3" />
          <h2 class="mb-0 text-dark me-3">Settings</h2>
          <span class="badge bg-secondary fs-6">Preferences</span>
        </div>
        <div
          class="user-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
        >
          JD
        </div>
      </header>

      <!-- Content -->
      <div class="content p-4">
        <!-- Settings Navigation -->
        <div
          class="row mb-4"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.8,
              ease: 'easeOut',
            },
          }"
        >
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <ul class="nav nav-pills" id="settings-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active settings-tab-btn"
                      id="general-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#general"
                      type="button"
                      role="tab"
                    >
                      <i class="bi bi-sliders me-2"></i>General
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link settings-tab-btn"
                      id="account-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#account"
                      type="button"
                      role="tab"
                    >
                      <i class="bi bi-person me-2"></i>Account
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link settings-tab-btn"
                      id="notifications-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#notifications"
                      type="button"
                      role="tab"
                    >
                      <i class="bi bi-bell me-2"></i>Notifications
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link settings-tab-btn"
                      id="security-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#security"
                      type="button"
                      role="tab"
                    >
                      <i class="bi bi-shield-lock me-2"></i>Security
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link settings-tab-btn"
                      id="backup-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#backup"
                      type="button"
                      role="tab"
                    >
                      <i class="bi bi-cloud-arrow-up me-2"></i>Backup
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Settings Content -->
        <div class="tab-content" id="settings-tab-content">
          <!-- General Settings -->
          <div class="tab-pane fade show active" id="general" role="tabpanel">
            <div class="row">
              <div class="col-xl-8 col-lg-10">
                <!-- System Preferences -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-gear-fill me-2 text-primary"></i>
                      System Preferences
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Language</label>
                        <select class="form-select">
                          <option selected>English (US)</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Timezone</label>
                        <select class="form-select">
                          <option selected>UTC-05:00 (Eastern Time)</option>
                          <option>UTC-08:00 (Pacific Time)</option>
                          <option>UTC+00:00 (GMT)</option>
                          <option>UTC+01:00 (Central European Time)</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Currency</label>
                        <select class="form-select">
                          <option selected>USD ($)</option>
                          <option>EUR (€)</option>
                          <option>GBP (£)</option>
                          <option>JPY (¥)</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Date Format</label>
                        <select class="form-select">
                          <option selected>MM/DD/YYYY</option>
                          <option>DD/MM/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Display Settings -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-display me-2 text-success"></i>
                      Display Settings
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 mb-3">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <label class="form-label mb-1">Dark Mode</label>
                            <p class="text-muted small mb-0">
                              Switch between light and dark themes
                            </p>
                          </div>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="darkMode"
                              v-model="darkMode"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-3">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <label class="form-label mb-1">Compact View</label>
                            <p class="text-muted small mb-0">
                              Reduce spacing for more content
                            </p>
                          </div>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="compactView"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Items per Page</label>
                        <select class="form-select">
                          <option>10</option>
                          <option selected>25</option>
                          <option>50</option>
                          <option>100</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Default View</label>
                        <select class="form-select">
                          <option selected>Grid View</option>
                          <option>List View</option>
                          <option>Table View</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Inventory Settings -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-box-seam me-2 text-info"></i>
                      Inventory Settings
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Low Stock Threshold</label>
                        <input
                          type="number"
                          class="form-control"
                          value="10"
                          min="1"
                        />
                        <small class="text-muted"
                          >Alert when stock falls below this number</small
                        >
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Auto-reorder Point</label>
                        <input
                          type="number"
                          class="form-control"
                          value="5"
                          min="1"
                        />
                        <small class="text-muted"
                          >Automatically create reorder when stock hits this
                          level</small
                        >
                      </div>
                      <div class="col-12 mb-3">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <label class="form-label mb-1">Auto-reorder</label>
                            <p class="text-muted small mb-0">
                              Automatically reorder products when stock is low
                            </p>
                          </div>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="autoReorder"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-3">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <label class="form-label mb-1"
                              >Track Serial Numbers</label
                            >
                            <p class="text-muted small mb-0">
                              Enable serial number tracking for products
                            </p>
                          </div>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="trackSerial"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Settings -->
          <div class="tab-pane fade" id="account" role="tabpanel">
            <div class="row">
              <div class="col-xl-8 col-lg-10">
                <!-- Profile Information -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-person-circle me-2 text-primary"></i>
                      Profile Information
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 mb-4 text-center">
                        <div class="profile-avatar-wrapper">
                          <div class="profile-avatar bg-primary text-white">
                            <i class="bi bi-person fs-1"></i>
                          </div>
                          <button class="btn btn-sm btn-outline-primary mt-2">
                            Change Avatar
                          </button>
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" value="John" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" value="Doe" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          value="john.doe@example.com"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Phone</label>
                        <input
                          type="tel"
                          class="form-control"
                          value="+1 (555) 123-4567"
                        />
                      </div>
                      <div class="col-12 mb-3">
                        <label class="form-label">Company</label>
                        <input
                          type="text"
                          class="form-control"
                          value="InventoryPro Inc."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Address Information -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-geo-alt me-2 text-success"></i>
                      Address Information
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 mb-3">
                        <label class="form-label">Street Address</label>
                        <input
                          type="text"
                          class="form-control"
                          value="123 Business St"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">City</label>
                        <input
                          type="text"
                          class="form-control"
                          value="New York"
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <label class="form-label">State</label>
                        <select class="form-select">
                          <option selected>NY</option>
                          <option>CA</option>
                          <option>TX</option>
                          <option>FL</option>
                        </select>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label class="form-label">ZIP Code</label>
                        <input type="text" class="form-control" value="10001" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Notifications -->
          <div class="tab-pane fade" id="notifications" role="tabpanel">
            <div class="row">
              <div class="col-xl-8 col-lg-10">
                <!-- Email Notifications -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-envelope me-2 text-primary"></i>
                      Email Notifications
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="notification-item">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div>
                          <label class="form-label mb-1"
                            >Low Stock Alerts</label
                          >
                          <p class="text-muted small mb-0">
                            Get notified when products are running low
                          </p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="lowStockEmail"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                    <div class="notification-item">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div>
                          <label class="form-label mb-1">New Orders</label>
                          <p class="text-muted small mb-0">
                            Receive emails for new order notifications
                          </p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="orderEmail"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                    <div class="notification-item">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div>
                          <label class="form-label mb-1">System Updates</label>
                          <p class="text-muted small mb-0">
                            Get notified about system updates and maintenance
                          </p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="systemEmail"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="notification-item">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div>
                          <label class="form-label mb-1">Weekly Reports</label>
                          <p class="text-muted small mb-0">
                            Receive weekly inventory summary reports
                          </p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="reportsEmail"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Push Notifications -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-app-indicator me-2 text-success"></i>
                      Push Notifications
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="notification-item">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div>
                          <label class="form-label mb-1"
                            >Browser Notifications</label
                          >
                          <p class="text-muted small mb-0">
                            Show notifications in your browser
                          </p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="browserNotif"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                    <div class="notification-item">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div>
                          <label class="form-label mb-1">Mobile Push</label>
                          <p class="text-muted small mb-0">
                            Send notifications to your mobile device
                          </p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="mobileNotif"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Security -->
          <div class="tab-pane fade" id="security" role="tabpanel">
            <div class="row">
              <div class="col-xl-8 col-lg-10">
                <!-- Password Settings -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-key me-2 text-primary"></i>
                      Password Settings
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 mb-3">
                        <label class="form-label">Current Password</label>
                        <input type="password" class="form-control" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">New Password</label>
                        <input type="password" class="form-control" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Confirm New Password</label>
                        <input type="password" class="form-control" />
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary">Update Password</button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Two-Factor Authentication -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-shield-check me-2 text-success"></i>
                      Two-Factor Authentication
                    </h5>
                  </div>
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <div>
                        <label class="form-label mb-1">Enable 2FA</label>
                        <p class="text-muted small mb-0">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="twoFA"
                        />
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <i class="bi bi-info-circle me-2"></i>
                      Two-factor authentication is currently disabled. Enable it
                      to secure your account.
                    </div>
                  </div>
                </div>

                <!-- Login Sessions -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-clock-history me-2 text-warning"></i>
                      Active Sessions
                    </h5>
                  </div>
                  <div class="card-body">
                    <div
                      class="session-item d-flex justify-content-between align-items-center p-3 border rounded mb-3"
                    >
                      <div class="d-flex align-items-center">
                        <i class="bi bi-laptop me-3 fs-4 text-primary"></i>
                        <div>
                          <div class="fw-bold">Chrome on Windows</div>
                          <small class="text-muted"
                            >192.168.1.100 • New York, US • Current
                            session</small
                          >
                        </div>
                      </div>
                      <span class="badge bg-success">Active</span>
                    </div>
                    <div
                      class="session-item d-flex justify-content-between align-items-center p-3 border rounded mb-3"
                    >
                      <div class="d-flex align-items-center">
                        <i class="bi bi-phone me-3 fs-4 text-info"></i>
                        <div>
                          <div class="fw-bold">Safari on iPhone</div>
                          <small class="text-muted"
                            >10.0.0.5 • New York, US • 2 hours ago</small
                          >
                        </div>
                      </div>
                      <button class="btn btn-sm btn-outline-danger">
                        Revoke
                      </button>
                    </div>
                    <button class="btn btn-outline-danger">
                      Sign out all other sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backup -->
          <div class="tab-pane fade" id="backup" role="tabpanel">
            <div class="row">
              <div class="col-xl-8 col-lg-10">
                <!-- Backup Settings -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-cloud-arrow-up me-2 text-primary"></i>
                      Automatic Backups
                    </h5>
                  </div>
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <div>
                        <label class="form-label mb-1"
                          >Enable Automatic Backups</label
                        >
                        <p class="text-muted small mb-0">
                          Automatically backup your data at regular intervals
                        </p>
                      </div>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="autoBackup"
                          checked
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Backup Frequency</label>
                        <select class="form-select">
                          <option selected>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Backup Time</label>
                        <input type="time" class="form-control" value="02:00" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Backup History -->
                <div class="card border-0 shadow-sm mb-4">
                  <div
                    class="card-header bg-white border-bottom d-flex justify-content-between align-items-center"
                  >
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-archive me-2 text-success"></i>
                      Backup History
                    </h5>
                    <button class="btn btn-primary btn-sm">
                      Create Backup Now
                    </button>
                  </div>
                  <div class="card-body">
                    <div
                      class="backup-item d-flex flex-wrap justify-content-between align-items-center p-3 border rounded mb-3"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="bi bi-file-earmark-zip me-3 fs-4 text-primary"
                        ></i>
                        <div>
                          <div class="fw-bold">backup_2024_06_19.zip</div>
                          <small class="text-muted"
                            >Full backup • 45.2 MB • June 19, 2024 at 2:00
                            AM</small
                          >
                        </div>
                      </div>
                      <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-sm btn-outline-primary">
                          Download
                        </button>
                        <button class="btn btn-sm btn-outline-success">
                          Restore
                        </button>
                      </div>
                    </div>
                    <div
                      class="backup-item d-flex flex-wrap justify-content-between align-items-center p-3 border rounded mb-3"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="bi bi-file-earmark-zip me-3 fs-4 text-primary"
                        ></i>
                        <div>
                          <div class="fw-bold">backup_2024_06_18.zip</div>
                          <small class="text-muted"
                            >Full backup • 44.8 MB • June 18, 2024 at 2:00
                            AM</small
                          >
                        </div>
                      </div>
                      <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-sm btn-outline-primary">
                          Download
                        </button>
                        <button class="btn btn-sm btn-outline-success">
                          Restore
                        </button>
                      </div>
                    </div>
                    <div
                      class="backup-item d-flex flex-wrap justify-content-between align-items-center p-3 border rounded mb-3"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="bi bi-file-earmark-zip me-3 fs-4 text-primary"
                        ></i>
                        <div>
                          <div class="fw-bold">backup_2024_06_17.zip</div>
                          <small class="text-muted"
                            >Full backup • 43.9 MB • June 17, 2024 at 2:00
                            AM</small
                          >
                        </div>
                      </div>
                      <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-sm btn-outline-primary">
                          Download
                        </button>
                        <button class="btn btn-sm btn-outline-success">
                          Restore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Data Export -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 d-flex align-items-center">
                      <i class="bi bi-download me-2 text-info"></i>
                      Data Export
                    </h5>
                  </div>
                  <div class="card-body">
                    <p class="text-muted mb-3">
                      Export your data in various formats for external use or
                      migration.
                    </p>
                    <div class="row">
                      <div class="col-md-4 mb-3">
                        <button class="btn btn-outline-primary w-100">
                          <i class="bi bi-file-earmark-excel me-2"></i>
                          Export to Excel
                        </button>
                      </div>
                      <div class="col-md-4 mb-3">
                        <button class="btn btn-outline-success w-100">
                          <i class="bi bi-file-earmark-text me-2"></i>
                          Export to CSV
                        </button>
                      </div>
                      <div class="col-md-4 mb-3">
                        <button class="btn btn-outline-info w-100">
                          <i class="bi bi-file-earmark-code me-2"></i>
                          Export to JSON
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Save Button -->
        <div class="row mt-4">
          <div class="col-12">
            <div class="d-flex justify-content-end gap-3">
              <button class="btn btn-outline-secondary hover-scale">
                <i class="bi bi-x-circle me-1"></i>
                Cancel
              </button>
              <button class="btn btn-primary hover-lift">
                <i class="bi bi-check-circle me-1"></i>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from "../composables/useDarkMode";

const { darkMode } = useDarkMode();
</script>

<style scoped>
/* Base Layout */
.dashboard-container {
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevents scrollbars if content fits */
}

.main-content {
  flex: 1;
  margin-left: 250px; /* Sidebar width */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Allow scrolling in main content */
}

.header {
  min-height: 70px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
}

.content {
  flex: 1;
  overflow-y: auto;
}

/* Enhanced Animations */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform-origin: center;
}

.hover-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.hover-scale {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.hover-scale:hover {
  transform: scale(1.02);
}

/* Settings Navigation */
.settings-tab-btn {
  border-radius: 8px;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
}

.settings-tab-btn:hover {
  transform: translateY(-2px);
}

.settings-tab-btn.active {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

/* Profile Avatar */
.profile-avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

/* Card Headers */
.card-header {
  border-bottom: 1px solid #f1f3f4;
  padding: 1rem 1.5rem;
}

.card-title {
  font-weight: 600;
}

/* Form Controls */
.form-control:focus,
.form-select:focus {
  border-color: #86b7fe;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

/* Switch Toggles */
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Notification Items */
.notification-item {
  border-bottom: 1px solid #f1f3f4;
  padding-bottom: 1rem;
}

.notification-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Session Items */
.session-item {
  transition: all 0.3s ease;
}

.session-item:hover {
  background-color: #f8f9fa;
  transform: translateX(5px);
}

/* Backup Items */
.backup-item {
  transition: all 0.3s ease;
}

.backup-item:hover {
  background-color: #f8f9fa;
  transform: translateX(5px);
}

/* this removes the padding at the iphone 14 pro max and others */
element.style {
  padding-right: 0px;
}

/* Responsive Design */
@media (max-width: 992px) {
  .sidebar {
    margin-left: -250px;
  }
}

@media (max-width: 768px) {
  .settings-tab-btn {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }

  .nav-pills {
    flex-wrap: wrap;
  }

  .col-md-6,
  .col-md-4,
  .col-md-3 {
    margin-bottom: 1rem;
  }
}

@media (max-width: 767px) {
  .main-content {
    margin-left: 0;
  }
}

/* Custom Scrollbar */
.content::-webkit-scrollbar {
  width: 6px;
}

.content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Tab Content */
.tab-pane {
  min-height: 400px;
}

/* Alerts */
.alert {
  border-radius: 8px;
}
</style>
