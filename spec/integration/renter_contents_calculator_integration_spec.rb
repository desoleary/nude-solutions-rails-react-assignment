# frozen_string_literal: true

require 'rails_helper'

describe 'RenterContentsCalculatorController', type: :request do
  describe 'show list of renters contents' do
    before do
      get '/'
    end

    it 'returns list of contents' do
      expect(response).to have_http_status(200)
    end
  end
end
