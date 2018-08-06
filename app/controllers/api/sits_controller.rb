class Api::SitsController < ApplicationController
  def index
    @sits = Sit.all
    render json: @sits
  end

  def create
    @sit = Sit.new(sit_params)
    if (@sit.save)
      render json: @sit
    else
      render json: @sit.errors.full_messages, status: 401
    end
  end

  private
  def sit_params
    params.require(:sit).permit(:description, :lat, :lng)
  end
end
