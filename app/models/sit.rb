class Sit < ApplicationRecord
  validates :description, :lat, :lng, presence: true
end
